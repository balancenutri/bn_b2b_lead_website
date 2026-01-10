export const Tab = {
  IMPACT: "IMPACT",
  LEGACY: "LEGACY",
  SYNERGY: "SYNERGY",
} as const;

export type Tab = (typeof Tab)[keyof typeof Tab];

export interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export interface MetricData {
  value: string;
  label: string;
  context: string;
}

export interface StrategyResponse {
  brandMetric: MetricData;
  retailMetric: MetricData;
  wellnessMetric: MetricData;
}
