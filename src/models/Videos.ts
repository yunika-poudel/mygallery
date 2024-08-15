export interface Videos {
  id: number;
  width: number;
  height: number;
  duration: number;
  full_res: any;
  tags: any[];
  url: string;
  image: string;
  avg_color: any;
  user: User;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
}

export interface User {
  id: number;
  name: string;
  url: string;
}

export interface VideoFile {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
  size: number;
}

export interface VideoPicture {
  id: number;
  nr: number;
  picture: string;
}
