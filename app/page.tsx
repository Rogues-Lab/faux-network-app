import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Sale from './sale/page';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <Sale/>
    // <Pricing
    //   session={session}
    //   user={session?.user}
    //   products={products}
    //   subscription={subscription}
    // />
  );
}
