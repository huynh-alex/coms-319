const BACKEND_IP = process.env.REACT_APP_BACKEND_IP;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;

export async function getBenchmarks() {
  console.log("!");
  const res = await fetch(`${BACKEND_IP}:${BACKEND_PORT}/benchmarks/`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const benchmarks = await res.json();
  return benchmarks;
}

export async function getBenchmark(signature) {
  try {
    const res = await fetch(`${BACKEND_IP}:${BACKEND_PORT}/benchmarks/${signature}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const benchmark = await res.json();
    return benchmark;
  } catch (err) {
    return {}
  }
}

export async function createBenchmark(benchmark) {
  try {
    const res = await fetch(`${BACKEND_IP}:${BACKEND_PORT}/benchmarks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(benchmark),
    });
    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateBenchmark(benchmark) {
  const res = await fetch(`${BACKEND_IP}:${BACKEND_PORT}/benchmarks/`, {
    method: "PUT",
    body: JSON.stringify(benchmark),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

export async function deleteBenchmark(benchmark) {
  const res = await fetch(`${BACKEND_IP}:${BACKEND_PORT}/benchmarks/`, {
    method: "DELETE",
    body: JSON.stringify(benchmark),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return {};
}
