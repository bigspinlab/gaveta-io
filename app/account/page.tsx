import Link from 'next/link';
import AccountForm from './accountForm';
import { createClient } from '@/utils/supabase/server';

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <AccountForm user={user} />
      <Link href="/dashboard">Go back to dashboard</Link>
    </>
  ) 
}
