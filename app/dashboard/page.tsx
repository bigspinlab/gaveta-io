import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Welcome</h1>
      <p>{user?.email}</p>
      <Link href="/account">Go to your account page</Link>
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
