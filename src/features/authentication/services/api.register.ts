interface TRegister {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({ name, email, password }: TRegister) {
  try {
    const res = await fetch('http://localhost:8080/api/collections/users/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, passwordConfirm: password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
