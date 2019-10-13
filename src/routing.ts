import { mount, route } from "navi";
import App from "~/App";
import WhyWeNeedMoney from "~/pages/trends/WhyWeNeedMoney";

export const routes = mount({
  "/": route({
    view: App
  }),
  "/why": route({
    view: WhyWeNeedMoney
  })
});
