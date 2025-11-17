"use client";

import Link from "next/link";

function Signup() {
  return (
    <main>
      <h1>Signup</h1>

      <input type="email" />
      <input type="password" />

      <Link href="/">Login</Link>
    </main>
  );
}

export default Signup;
