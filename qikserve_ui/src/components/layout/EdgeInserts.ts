interface PaddingValues {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface SymmetricalValues {
  horizontal?: number,
  vertical?: number,
}

class EdgeInserts {
  left: number;
  right: number;
  top: number;
  bottom: number;

  constructor(padding: PaddingValues) {
    this.left = padding.left;
    this.right = padding.right;
    this.top = padding.top;
    this.bottom = padding.bottom;
  }

  public static all(value: number): EdgeInserts {
    return {bottom: value, left: value, right: value, top: value};
  }

  public static only(padding: PaddingValues): EdgeInserts {
    return padding;
  }

  public static symmetrical({vertical, horizontal}: SymmetricalValues): EdgeInserts {
    return {bottom: vertical ?? 0, left: horizontal ?? 0, right: horizontal ?? 0, top: vertical ?? 0};
  }
}

export default EdgeInserts;

