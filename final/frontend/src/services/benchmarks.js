const BASE_URL = process.env.NUXT_ENV_API_URL;

export async function getBenchmarks() {
  const res = await fetch(`${BASE_URL}/benchmarks/`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const benchmarks = await res.json();
  return benchmarks;
}

export async function createBenchmark(benchmark) {
  const res = await fetch(`${BASE_URL}/benchmarks/`, {
    method: "POST",
    body: JSON.stringify(benchmark),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

export async function updateBenchmark(benchmark) {
  const res = await fetch(`${BASE_URL}/benchmarks/`, {
    method: "PATCH",
    body: JSON.stringify(benchmark),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

export async function deleteBenchmark(benchmark) {
  const res = await fetch(`${BASE_URL}/benchmarks/`, {
    method: "DELETE",
    body: JSON.stringify(benchmark),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
}
