# MCST-Gen

Demo samples for audio and video generation across six tasks, provided for academic research demonstration.

**[▶ Explore the interactive demo](https://zhaoyuecui.github.io/MCST-Gen/)**

The interactive page presents 28 selected examples from the 75 samples in this repository. Each example includes a media player and its original conditioning label, with speech, sound descriptions, and music shown separately.

## Supported tasks

| Task | Description | Repository samples | Featured demos |
| --- | --- | ---: | ---: |
| **V2ST** — Video-to-Soundtrack | Generate a complete soundtrack from video, including speech, sound effects, and music. | 20 | 8 |
| **V2A** — Video-to-Audio | Generate general audio or sound effects from video. | 10 | 4 |
| **V2S** — Video-to-Speech | Generate speech from video. | 15 | 4 |
| **TTA** — Text-to-Audio | Generate general audio from text prompts. | 10 | 4 |
| **TTS** — Text-to-Speech | Generate speech from text prompts. | 10 | 4 |
| **TTM** — Text-to-Music | Generate music-related audio from text prompts. | 10 | 4 |

## Repository organization

```text
MCST-Gen/
├── V2ST/                  # Video samples (.mp4) and v2st.json
├── V2A/                   # Video samples (.mp4) and v2a.json
├── V2S/                   # Video samples (.mp4) and v2s.json
├── TTA/                   # Audio samples (.flac) and tta.json
├── TTS/                   # Audio samples (.flac) and tts.json
├── TTM/                   # Audio samples (.flac) and ttm.json
├── index.html             # Interactive demo page
├── styles.css
├── script.js
└── README.md
```

## Media and labels

Each task folder contains a metadata file named after the task. These `.json` files use **JSON Lines** format: each non-empty line is a separate object with an `id` and a `label`.

```json
{"id": "1", "label": "..."}
```

The `id` matches the media filename without its extension. For example, `"id": "1"` in `TTA/tta.json` corresponds to `TTA/1.flac`; the same ID in `V2ST/v2st.json` corresponds to `V2ST/1.mp4`.

The complete `label` retains the original conditioning text and component markers:

| Markers | Content |
| --- | --- |
| `<S> … <E>` | Speech text |
| `<AUDCAP> … <ENDAUDCAP>` | Sound description, which may also describe voices or instruments |
| `<MUSIC> … <ENDMUSIC>` | Music description |

An empty component indicates that its corresponding label field is not specified. It does not independently establish whether that component is audible in the generated media.

## Interactive demo

The demo uses this repository's existing media files and preserves their original IDs and labels. It presents tasks in the order **V2ST → V2A → V2S → TTA → TTS → TTM**, with four samples per row on desktop. V2ST occupies two rows; each other task occupies one row. Smaller screens use two or one column.

The page supports label search, section navigation, media playback, and expandable original labels. The complete collection of 75 samples remains available in the task folders.

GitHub Pages serves the demo from the `main` branch at the repository root. The repository URL used in the paper remains unchanged:

**[github.com/ZhaoyueCui/MCST-Gen](https://github.com/ZhaoyueCui/MCST-Gen/)**
