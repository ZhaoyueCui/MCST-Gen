# MCST-Gen Demo Samples

This directory contains sampled generation results from MCST-Gen for academic research demonstration.

## Tasks

- **TTA (Text-to-Audio)**: Generate general audio from text prompts.
- **TTM (Text-to-Music)**: Generate music-related audio from text prompts.
- **TTS (Text-to-Speech)**: Generate speech from text prompts.
- **V2A (Video-to-Audio)**: Generate general audio or sound effects from video.
- **V2S (Video-to-Speech)**: Generate speech from video.
- **V2ST (Video-to-Soundtrack)**: Generate a complete soundtrack from video, including speech, sound effects, and music.

## Organization

The six task folders are:

```text
TTA/
TTM/
TTS/
V2A/
V2S/
V2ST/
```

Audio task folders contain `.flac` files, while video task folders contain `.mp4` files. Each task folder also contains one corresponding JSON file:

```text
TTA/
├── 1.flac
├── 2.flac
├── ...
└── tta.json
```

Media files are renamed using numeric IDs. The `id` in the JSON file is the media filename without its extension, and `label` stores the corresponding complete prompt or conditioning text:

```json
{"id": "1", "label": "..."}
```

Therefore, the entry with `"id": "1"` in `tta.json` corresponds to `TTA/1.flac`. The same mapping applies to the other folders; for example, `"id": "1"` in `v2a.json` corresponds to `V2A/1.mp4`.
