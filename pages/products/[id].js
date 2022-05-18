import Products from ".";

import { useRouter } from 'next/router';

export default function Product() {
    const router = useRouter();
    
    const productId = router.query.id;

    //where requeset to backend API goes

    return (
        <div>{productId}</div>
    )
}