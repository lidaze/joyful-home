import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWeekNumber() {
  // 创建日期对象，如果没有传入日期则使用当前日期
  const currentDate: Date = new Date();

  // 获取当年1月1日的日期对象
  const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);

  // 计算当前日期距离当年1月1日的天数
  const daysSinceFirstDay = Math.floor(
    ((currentDate as any) - (firstDayOfYear as any)) / (24 * 60 * 60 * 1000)
  );

  // 计算周数
  const weekNumber = Math.ceil((daysSinceFirstDay + firstDayOfYear.getDay() + 1) / 7);

  return weekNumber;
}
