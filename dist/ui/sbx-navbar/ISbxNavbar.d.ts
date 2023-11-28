import { ReactElement } from 'react';
import ISbxRouter from '../../sbx-router';
/**
 *
 */
export default interface ISbxNavbar {
    logo: ReactElement;
    items: Array<ISbxRouter> | null;
}
