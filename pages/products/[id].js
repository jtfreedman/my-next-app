import Products from ".";

import { useRouter } from 'next/router';

export default function Product() {
    const router = useRouter();
    
    const productId = router.query.id;

    //where requeset to backend API goes

    return (
        <h1>{productId}</h1>
    )
}