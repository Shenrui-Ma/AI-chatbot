interface GPTSovitsApiParams {
  text: string;
  refer_audio_url: string;
  refer_audio_text: string;
  speech_speed: number;
}

export class GPTSovitsClient {
  private serverAddr: string;

  constructor(serverAddr: string) {
    this.serverAddr = serverAddr;
  }

  async generate_audio(params: GPTSovitsApiParams) {
    const payload = {
      text: params.text,
      text_lang: "zh",
      ref_audio_path: params.refer_audio_url,
      prompt_text: params.refer_audio_text,
      prompt_lang: "zh",
      top_k: 5,
      top_p: 1,
      temperature: 1,
      text_split_method: "cut_custom",
      batch_size: 10,
      batch_threshold: 0.75,
      split_bucket: false,
      return_fragment: true,
      speed_factor: params.speech_speed,
    };

    const response = await fetch(`${this.serverAddr}/tts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok)
      throw new Error(
        `HTTP error when calling GPT-Sovits API! Status: ${response.status}`,
      );

    return (await response.json()) as string[];
  }
}