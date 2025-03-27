declare module "react/jsx-runtime" {
    export default any;
}
declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}