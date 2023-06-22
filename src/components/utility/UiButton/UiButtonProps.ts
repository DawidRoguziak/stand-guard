export default interface UiButtonProps {
    nativeType?: 'button' | 'submit' | 'reset';
    type?: 'primary' | 'success' | 'warning' | 'danger';
    isBlock?: boolean;
}