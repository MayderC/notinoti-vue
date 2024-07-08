import { GetClases, NotinotiProps } from '../interfaces/notinoti.interface';

declare const _default: import('vue').DefineComponent<{
    notification: {
        type: () => NotinotiProps;
        required: true;
    };
    classProp: {
        type: () => GetClases;
        required: false;
        default: {
            container: string;
            title: string;
            msg: string;
        };
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    notification: {
        type: () => NotinotiProps;
        required: true;
    };
    classProp: {
        type: () => GetClases;
        required: false;
        default: {
            container: string;
            title: string;
            msg: string;
        };
    };
}>>, {
    classProp: GetClases;
}, {}>;
export default _default;
