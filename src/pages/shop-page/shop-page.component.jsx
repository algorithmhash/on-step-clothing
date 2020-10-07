import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data.js';
import { useRecoilValue } from 'recoil';
import { shopItemListState } from '../../recoil/index.atom';
function ShopPage() {

    const [arrayValue, setArrayValue] = useState('');
    const setTodoList = useSetRecoilState(shopItemListState);

    const addItem = () => {
        setTodoList((oldArrayValues) => [
            ...oldArrayValues,
            {
                id: id,
                arrayValue: SHOP_DATA
            },
        ]);
        setArrayValue('');
    };

    return (
        <div class="shop-page">
            {
                arrayValue.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
}
export default ShopPage;