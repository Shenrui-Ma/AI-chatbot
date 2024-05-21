import copy
import time

import requests


class SDWebUIApi:
    def __init__(self, server_ip, server_port=7860):
        self.server_ip = server_ip
        self.server_port = server_port
        self.url = f"http://{self.server_ip}:{self.server_port}"
        self.payload_sample = {
            "prompt": "(best quality, 8K, masterpiece, ultra detailed:1.2), (empty place, vacant:1.5), ",
            "negative_prompt": "(people, body, boy, girl, male, female, man, woman, human, human body, human standing, human figure: 1.5), (FastNegativeV2: 1), bad-picture-chill-75v, (worst quality, low quality:1.4) ",
            "sampler_name": "DPM++ 2M Karras",
            "batch_size": 1,
            "n_iter": 1,
            "steps": 20,
            "cfg_scale": 7,
            "width": 920,
            "height": 560,
        }

    def generate_image(self, prompt) -> "list[str]":
        payload = copy.deepcopy(self.payload_sample)
        payload["prompt"] += prompt
        response = requests.post(
            url=f"{self.url}/sdapi/v1/txt2img", json=payload, timeout=20
        )
        if response.status_code != 200:
            raise Exception(f"API error: {response.status_code} {response.text}")
        r = response.json()
        return r["images"]
        # API error: POST: http://172.23.186.85:7860/sdapi/v1/txt2img {'error': 'RuntimeError', 'detail': '', 'body': '', 'errors': 'CUDA error: unknown error\nCUDA kernel errors might be asynchronously reported at some other API call, so the stacktrace below might be incorrect.\nFor debugging consider passing CUDA_LAUNCH_BLOCKING=1.\nCompile with `TORCH_USE_CUDA_DSA` to enable device-side assertions.\n'}


if __name__ == "__main__":
    server_ip = "52.81.143.33"
    sd_client = SDWebUIApi(server_ip)
    tmp_time = time.time()
    images = sd_client.generate_image("""In the neon-drenched alleyways of a sprawling cyberpunk metropolis, there lies a bar that is an oasis of gritty charm amidst the chaos. Known as "Neon Shroud," this establishment is a haven for the city's eclectic mix of hackers, mercenaries, corporate drones, and digital drifters.

From the outside, Neon Shroud is unassuming, its entrance marked by a pulsating holographic sign that flickers with the silhouette of a coyote, the bar's unofficial mascot. The facade is an amalgamation of retrofitted scrap metal and salvaged doors, a testament to the improvisational architecture that defines the city.

Upon entering, visitors are immediately enveloped by a symphony of electronic beats and the hum of conversation, punctuated by the occasional whir of a cybernetic limb. The air is thick with the scent of synthetic incense and the tang of ozone, a byproduct of the numerous neon signs and advanced tech scattered throughout the space.

The interior is a labyrinthine collection of rooms and alcoves, each with its own theme and mood. The main bar area is dominated by a long counter made of reclaimed circuit boards and resin, lit from beneath with a soft, pulsating glow. Bartenders with augmented reality visors mix cocktails that glow with bioluminescent ingredients, serving drinks named after infamous viruses and hacking exploits.
""")
    print(f"Time taken: {time.time() - tmp_time}")

