export interface SlideData {
  map(arg0: (slide: any, index: any) => JSX.Element): import('react').ReactNode;
  length: number;
  title: String;
  content: String;
  image: string;
  skill: String[];
}
