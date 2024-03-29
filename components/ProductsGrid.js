import styled from "styled-components"
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export default function ProductsGrid({products}) {
    return (
        <StyledProductsGrid>
            {products && products.map(product => (
                <ProductBox key={product._id} {...product} />
            ))}
        </StyledProductsGrid>
    )
}