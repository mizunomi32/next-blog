declare module "*.css"
declare module "*.scss"
declare module "*.sass"
declare module "*.png"
declare module "*.jpg"
declare module "*.svg" {
  const content: any;
  export default content;
}
