export interface Task {
  title: string;
  items: string[];
}

export interface RoadmapCardProps {
  quarter: string;
  tasks: Task[];
}
