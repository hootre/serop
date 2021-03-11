export interface SlideData {
  length: number;
  map(arg0: (slide: any, index: any) => JSX.Element): import('react').ReactNode;
  title: String;
  content: String;
  image: string;
  backImage: string;
  skill: String[];
}
