export interface CookieFortune {
  CookieFortune: string;
  id: string;
  createdIn: string;
}

export interface UseGetCookiesFortuneReturn {
  data: CookieFortune[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export interface CustomShowCookiesFortuneState {
  selectedFortune: string;
  luckyNumber: string;
  isLoadingFortune: boolean;
}

export interface LuckyNumberParts {
  part1: string;
  part2: string;
  part3: string;
}

export interface FortuneButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface FortuneDisplayProps {
  selectedFortune: string;
  luckyNumber: string;
  isLoadingFortune: boolean;
  className?: string;
}

export interface SpinnerProps {
  className?: string;
}


export interface AlertErrorProps {
  error: string;
  className?: string;
}
