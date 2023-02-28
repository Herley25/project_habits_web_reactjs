interface HabitProps {
  completed: number;
}

export const Habits = ({ completed }: HabitProps) => {
  return <div className="bg-zinc-900 w-10 text-white rounded m-2">{completed}</div>;
};
