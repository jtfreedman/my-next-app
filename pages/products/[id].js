import Products from ".";

import { useRouter } from 'next/router';

export default function Product() {
    const router = useRouter();
    
    const productId = router.query.id;

    return (
        <div></div>
    )
}