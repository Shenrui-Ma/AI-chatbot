import requests
import json
import nltk

nltk.download("punkt")
nltk.download("averaged_perceptron_tagger")

from nltk.tokenize import word_tokenize
from nltk import pos_tag

from scripts.AuthV3Util import addAuthParams

# 您的应用ID
APP_KEY = "378c255bb73242fc"
# 您的应用密钥
APP_SECRET = "oq3xZxjEVpUi2j5bFDHAyNEdvyqLUGdq"


def createRequest(q):
    print("******************************************调用翻译")
    """
    note: 将下列变量替换为需要请求的参数
    """
    # q = '蓝色的长裙，镶嵌着蓝色的宝石'
    lang_from = "zh-CHS"
    lang_to = "en"
    vocab_id = "83067295C87C4CE7BCCE95220644240E"

    data = {"q": q, "from": lang_from, "to": lang_to, "vocabId": vocab_id}

    addAuthParams(APP_KEY, APP_SECRET, data)

    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }  # 修改变量名为headers以匹配requests库的参数名
    res = doCall("https://openapi.youdao.com/api", headers, data, "post")

    # 解析响应
    response_data = json.loads(res.text)
    original_text = response_data.get("query", "")  # 获取原文本
    translation_result = response_data.get("translation", [""])[0]  # 获取翻译结果

    prompt = decorate(translation_result)

    print(f"原文本: {original_text}")
    print(f"翻译结果: {translation_result}")
    print(f"prompt: {prompt}")

    return prompt


def doCall(url, headers, params, method):
    if "get" == method:
        return requests.get(url, params=params, headers=headers)
    elif "post" == method:
        return requests.post(
            url, data=params, headers=headers
        )  # 修改参数名和参数传递方式以匹配requests库的要求


def decorate(s):
    to_del = {
        "I",
        "want",
        "you",
        "to",
        "me",
        "a",
        "an",
        "draw",
        "with",
        "he",
        "her",
        "him",
        "she",
        "his",
        "hers",
        "and",
    }
    # 生成一个所有元素首字母大写的to_del集合,并和to_del集合合并
    to_del = to_del.union({word.capitalize() for word in to_del})
    words = word_tokenize(s)
    tagged_words = pos_tag(words)

    processed_words = []
    noun_phrases = []  # 用于记录名词短语
    for i, (word, tag) in enumerate(tagged_words):
        if word not in to_del:
            if tag.startswith("NN"):
                # 检查下一个词是否也是名词，形成名词短语
                if i + 1 < len(tagged_words) and tagged_words[i + 1][1].startswith(
                    "NN"
                ):
                    noun_phrase = word + " " + tagged_words[i + 1][0]
                    noun_phrases.append((noun_phrase, word))
                    processed_words.append(noun_phrase + ",")
                    continue
                else:
                    noun_phrases.append((word, word))
                    processed_words.append(word + ",")
            else:
                processed_words.append(word)

    # 在每个名词短语前插入单独的名词
    for phrase, noun in noun_phrases:
        phrase_index = processed_words.index(phrase + ",")
        processed_words.insert(phrase_index, noun)

    # 移除列表中所有的逗号，然后在每个名词后重新添加逗号
    processed_words = [word for word in processed_words if word != ","]
    for i, word in enumerate(processed_words[:-1]):  # 避免在列表最后一个元素后添加逗号
        if word in [np[1] for np in noun_phrases]:
            processed_words[i] = word + ","

    # 添加前缀
    processed_words = " ".join(processed_words).replace(" ,", ",")
    prefix = "(best quality,8k),masterpiece,none background,"

    return prefix + processed_words


# 网易有道智云翻译服务api调用demo
# api接口: https://openapi.youdao.com/api
# if __name__ == '__main__':
#     createRequest(q='我想要你给我画一件蓝色的长裙，镶嵌着蓝色的宝石')
#     print("")
#     createRequest(q='画一条黑色的女性晚礼服，上面有红色的玫瑰花，还有长长的裙摆，翘起的领子')
