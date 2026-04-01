import { dashboardSummary, exceptions, timeline, forecastSnapshot, heatMap } from "./mockDashboardData";

const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getDashboardSummary() {
  await wait();
  return dashboardSummary;
}

export async function getExceptions() {
  await wait();
  return exceptions;
}

export async function getTimeline() {
  await wait();
  return timeline;
}

export async function getForecastSnapshot() {
  await wait();
  return forecastSnapshot;
}

export async function getHeatMap() {
  await wait();
  return heatMap;
}
