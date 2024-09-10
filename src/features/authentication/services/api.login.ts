interface TLogin {
  email: string;
  password: string;
}

export async function loginUser({ email, password }: TLogin) {
  try {
    const res = await fetch('http://localhost:8080/api/collections/users/auth-with-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identity: email, password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
