
export interface Tool {
  name: string;
  url: string;
  isTopRated?: boolean;
  badge?: string;
}

export const animationTools: Tool[] = [
  { name: "SORA 2", url: "https://www.sora.com", isTopRated: true, badge: "🏆 Video + Sound" },
  { name: "Google Veo 3", url: "https://aistudio.google.com/generate-video", isTopRated: true, badge: "🏆 Video + Sound" },
  { name: "KLING", url: "https://klingai.com" },
  { name: "HAILUO", url: "https://hailuoai.video/" },
  { name: "Higgsfield", url: "https://higgsfield.ai/" },
  { name: "RunwayML", url: "https://runwayml.com/" },
  { name: "PIKA LABS", url: "https://pika.art/" },
];

export const soundTools: Tool[] = [
  { name: "SUNO Music Generator", url: "https://suno.com/invite/@aiwebtools" },
  { name: "Eleven Labs Voice & Sound Generator", url: "https://elevenlabs.io/?from=kennybastian5304" },
  { name: "MUSIC VIDEO MAKER GPT", url: "https://musicvideomakergpt.lovable.app/?via=aiwebtools" },
  { name: "FLEXCLIP - Add Sound Effects To Video", url: "https://www.flexclip.com/ai/video-to-ai-sfx-generator/" },
];

export const lipsyncTools: Tool[] = [
  { name: "SORA 2", url: "https://www.sora.com", isTopRated: true, badge: "🏆 Video + Sound" },
  { name: "Google Veo 3", url: "https://aistudio.google.com/generate-video", isTopRated: true, badge: "🏆 Video + Sound" },
  { name: "Hedra", url: "https://www.hedra.com/" },
  { name: "VEO FLOW", url: "https://labs.google/fx/tools/flow" },
  { name: "⭐ VEO 3 PROMPT Generator", url: "https://chatgpt.com/g/g-682faef24c608191808180e89719cb09-veo3-text-to-video-prompt-maker" },
];

export const editingTools: Tool[] = [
  { name: "Filmora", url: "https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" },
  { name: "Videoleap", url: "https://www.videoleapapp.com/" },
];
