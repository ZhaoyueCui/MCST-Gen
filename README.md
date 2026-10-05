# MCST-Gen Demonstration Data

This folder contains selected audio and video samples for the MCST-Gen research demonstration.

Each subfolder represents a different generation task. Media files are renamed with consecutive numbers (`1`, `2`, `3`, ...). The JSONL file in the same folder uses the same number as the `id` and stores the corresponding complete dataset label.

For example, `1.mp4` or `1.flac` corresponds to the JSONL entry with `"id": "1"`.

## Tasks

- `audiocaps-tta`: Text-to-Audio samples from AudioCaps. The input is text and the output is general audio.
- `libritts-tts`: Text-to-Speech samples from LibriTTS. The input is text and the output is speech.
- `acavcaps-ttm`: Text-to-Music samples from ACAVCaps. The input is text and the output is music-related audio.
- `grid-v2s`: Video-to-Speech samples from GRID. The input is video and the output is speech.
- `vggsound-v2a`: Video-to-Audio samples from VGGSound. The input is video and the output is general audio or sound effects.
- `v2st`: Video-to-Soundtrack samples. This folder contains selected soundtrack-generation examples from OpenHumanVid, ACAVCaps, and VGGSound, including speech, sound effects, and music.

## Contents

- Audio tasks use `.flac` files.
- Video tasks use `.mp4` files.
- Each task folder contains one JSONL file with the same base name as the folder.
- Each JSONL entry contains only `id` and `label`.
- The `label` field preserves the complete label from the original dataset.
