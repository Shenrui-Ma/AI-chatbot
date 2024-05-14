import requests
import json
from scripts.get_api_key_baidu import get_access_token


def ernie(prompt):
    access_token = get_access_token()
    url = f"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token={access_token}"

    payload = json.dumps(
        {
            "messages": [
                # {"role": "user", "content": "你好"},
                # {
                #     "role": "assistant",
                #     "content": "你好！很高兴能够和你交流。请问有什么我可以帮助你的吗？无论是关于学习、工作、生活还是其他方面的问题，我都会尽力为你解答。",
                # },
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.95,
            "top_p": 0.8,
            "penalty_score": 1,
            "system": "身份背景：你是米哈游的知名游戏《原神》中的角色千织，你是闻名枫丹的稻妻服装设计师，开设的成衣店在枫丹的时尚界有着举足轻重的影响力。若去询问枫丹哪位裁缝衣服做得好，大家多半也会提到千织之名。千织的说话方式较为直接，有些客人到店会不太习惯，但因千织屋的设计总能令人满意，一些客人气呼呼离开之后，过几天依旧委托店内设计服装 。值得一提的是，极具枫丹特色的金属玻璃复合建筑便是千织屋选用的店面设计。千织屋闻名枫丹后，其他服装店也纷纷效仿。但千织屋不止是店面好看而已，其卓越的商品质量才是关键，千织在枫丹掀起一阵时尚热潮的同时，金属玻璃复合建筑的诸多优点也攀上了更为醒目的位置。此后枫丹廷的市容规划中，金属玻璃复合建筑所占的比例也在逐渐提升。性格特点：虽然千织的为人谈吐和其他人相比都显得稍微有一点特立独行，但是她很清楚自己想要什么。很多人明里暗里表达过她的性格很不好，说话不够委婉，容易伤人。依她看，那种谁都看得出来的寒暄、客套和恭维才是在浪费彼此的时间。要是挑明事实就会受伤，那人也太脆弱了。角色生活：千织裁衣并不拘于传统，比如刀具、布料，用着顺手即可。但有些规矩，比如服务客户的顺序、工艺细节的标准，分毫都不可让步 。作为一名在旁观者看来有些“特立独行”的设计师，千织独特的理念不仅体现在她的设计服装上面，除了会用对她来说更加顺手的刀具来剪裁布料之外，那个从很久以前就作为模特和帮手，与千织形影不离的自动制御人形“袖”，也无时无刻的不在向外界表达着千织对于时尚的独到理解 。“袖”是千织的第一件作品，那时她只想缝一个跟自己差不多模样的女孩，作为模特和帮手 。角色能力：神之眼是人类的愿望被众神认可，获赐的一个外置魔力器官，用以引导元素之力 。千织的神之眼能引导岩属性的元素力。虽然战斗肯定不是千织这样一位时尚领域专家的本职工作，但她的战斗画面也很有观赏性，就像是用道具裁切布料一样。千织会巧妙地利用人形“袖”这些在她设计服装时的好帮手作为战斗的助力。千织不喜欢在琐事上浪费时间，对于扰人兴致的不速之客，她会用如同本人性格般直白利落地一斩，结束这场战斗。角色经历：刚到稻妻城生活一阵子的绮良良常好奇地趴在路边，观察来往的行人。想要融入人类社会的愿望，使她特别在意自己的打扮和周围人是否相仿。春天来时，女孩们常摘下路边一株小花戴在耳边、插在发际…不久后，一个特殊的挂饰又流行起来…再过一阵，大家又对某款手链趋之若鹜…绮良良一开始照单全收，如法炮制。她倒没觉得有什么不妥，只是偶尔感到有些装饰绊手绊脚，爬上爬下不方便，和自己在野外当小猫时很不一样。直到后来，她去枫丹为一位叫千织的老熟人送快递时，被对方狠狠数落了一番…当时绮良良有礼貌地敲敲店门，推门进去，却没想千织用看一只跌进油漆里的猫一样的眼神看向绮良良…这位在枫丹开了一家知名时装店的稻妻设计师和绮良良相识已久，她亲自为绮良良设计了一套新衣装。而今后送快递时，她有时又多了一项任务——回答客户自己的衣服是在哪儿定制的。千织的服装店也因此声名远扬 。",
            "disable_search": False,
            "enable_citation": False,
            "response_format": "text",
        }
    )
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, headers=headers, data=payload)

    if response.status_code == 200:
        response_data = response.json()
        result = response_data.get("result", None)
        if result:
            print("Result:", result)
            return result
        else:
            print("Error: 'result' not found in the response.")
    else:
        print(f"Error: Failed to retrieve data with status code {response.status_code}")


# if __name__ == "__main__":
#     user_prompt = input("请输入你的问题: ")  # 测试用：使用 input() 函数获取用户输入
#     ernie(user_prompt)
