export const dashboardSummary = [
  { label: "Open Exceptions", value: "18", sub: "+4 today" },
  { label: "Overdue Follow-Ups", value: "6", sub: "2 critical" },
  { label: "Stores at Risk", value: "3", sub: "Benoni, Springs, Lyndhurst" },
  { label: "Forecast Accuracy", value: "91%", sub: "Last 7 days" },
];

export const exceptions = [
  { id: 1, store: "KFC Benoni", issue: "Stock variance on fillets", severity: "High", owner: "RGM", due: "Today", status: "Open" },
  { id: 2, store: "KFC Springs", issue: "Training gap on Window 4 modules", severity: "Medium", owner: "PDC", due: "Tomorrow", status: "In Progress" },
  { id: 3, store: "KFC Lyndhurst", issue: "Repeated sanitizer non-compliance", severity: "Critical", owner: "MOD", due: "Immediate", status: "Escalated" },
];

export const timeline = [
  { time: "08:12", text: "Exception created from daily report import" },
  { time: "08:25", text: "Assigned to store owner and PDC" },
  { time: "10:10", text: "Photo evidence uploaded" },
  { time: "11:40", text: "Follow-up reminder triggered" },
];

export const forecastSnapshot = [
  ["Hourly Sales", "Ready"],
  ["4 Week Forecast", "Mapped"],
  ["Labour Forecast", "Planned"],
  ["Chicken Forecast", "Planned"],
  ["Build-To", "Queued"],
  ["Variance Tracking", "Ready"],
];

export const heatMap = [
  { name: "Benoni", score: "Hot", note: "Variance + staffing pressure" },
  { name: "Springs", score: "Warm", note: "Training backlog" },
  { name: "Rembrandt", score: "Watch", note: "Sales softness" },
  { name: "Lyndhurst", score: "Hot", note: "Compliance repeats" },
  { name: "Brakpan", score: "Stable", note: "No major alerts" },
];
