// Deterministic "hand-drawn" SVG path generators. Paths are generated at build
// time, so the same seed always produces the same wobble.

type Point = [number, number];

function random(seed: number) {
  let t = seed + 0x6d2b79f5;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 100) / 100;

// Catmull-Rom spline through the points, emitted as cubic beziers.
function smooth(points: Point[]) {
  let d = `M${round(points[0][0])} ${round(points[0][1])}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1: Point = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Point = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${round(c1[0])} ${round(c1[1])} ${round(c2[0])} ${round(c2[1])} ${round(p2[0])} ${round(p2[1])}`;
  }
  return d;
}

/** A loose circle whose stroke overshoots its start, like a pen loop. */
export function circlePath(cx: number, cy: number, rx: number, ry = rx, seed = 1) {
  const rand = random(seed);
  const start = rand() * Math.PI * 2;
  const sweep = Math.PI * 2 + 0.35 + rand() * 0.3;
  const phase = rand() * Math.PI * 2;
  const wobble = 0.04 + rand() * 0.03;
  const steps = 28;
  const points: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = start + sweep * t;
    // Radius drifts slightly over the stroke so the loop doesn't close perfectly.
    const k = 1 + Math.sin(a * 2 + phase) * wobble + (t - 0.5) * 0.06;
    points.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return smooth(points);
}

/** A slightly bowed line from a to b. */
export function linePath(x1: number, y1: number, x2: number, y2: number, seed = 1, bow = 0.04) {
  const rand = random(seed);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const offset = (rand() - 0.5) * 2 * bow * len;
  const mx = x1 + dx / 2 + (-dy / len) * offset;
  const my = y1 + dy / 2 + (dx / len) * offset;
  return `M${round(x1)} ${round(y1)} Q${round(mx)} ${round(my)} ${round(x2)} ${round(y2)}`;
}

/** An arrow: a bowed shaft plus two short head strokes at the end. */
export function arrowPath(x1: number, y1: number, x2: number, y2: number, seed = 1, bow = 0.12, head = 9) {
  const shaft = linePath(x1, y1, x2, y2, seed, bow);
  const rand = random(seed + 7);
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const spread = 0.45 + rand() * 0.15;
  const h1: Point = [x2 - Math.cos(angle - spread) * head, y2 - Math.sin(angle - spread) * head];
  const h2: Point = [x2 - Math.cos(angle + spread) * head, y2 - Math.sin(angle + spread) * head];
  return `${shaft} M${round(h1[0])} ${round(h1[1])} L${round(x2)} ${round(y2)} L${round(h2[0])} ${round(h2[1])}`;
}

/** A rough rectangle: four strokes that overshoot at the corners. */
export function rectPath(w: number, h: number, seed = 1, jitter = 1.2) {
  const rand = random(seed);
  const j = () => (rand() - 0.5) * 2 * jitter;
  const o = jitter * 1.5;
  return [
    linePath(-o + j(), j(), w + o + j(), j(), seed + 1, 0.006),
    linePath(w + j(), -o + j(), w + j(), h + o + j(), seed + 2, 0.01),
    linePath(w + o + j(), h + j(), -o + j(), h + j(), seed + 3, 0.006),
    linePath(j(), h + o + j(), j(), -o + j(), seed + 4, 0.01),
  ].join(" ");
}

/** A loose wavy underline across the given width. */
export function underlinePath(width: number, seed = 1, height = 8) {
  const rand = random(seed);
  const points: Point[] = [];
  const steps = Math.max(4, Math.round(width / 40));
  for (let i = 0; i <= steps; i++) {
    const x = (width * i) / steps;
    const y = height / 2 + (rand() - 0.5) * height * 0.7 + (i / steps) * 1.5;
    points.push([x, y]);
  }
  return smooth(points);
}
