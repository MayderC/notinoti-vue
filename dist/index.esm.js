import { defineComponent as f, computed as b, openBlock as d, createElementBlock as g, normalizeClass as c, createElementVNode as s, toDisplayString as u, createCommentVNode as v, Fragment as _, renderList as x, unref as w, normalizeStyle as h, createVNode as y, reactive as m } from "vue";
const e = {
  success: {
    container: "bg-green-100 border-l-4 border-green-500 text-green-700",
    title: "text-green-800",
    msg: "text-green-700"
  },
  error: {
    container: "bg-red-100 border-l-4 border-red-500 text-red-700",
    title: "text-red-800",
    msg: "text-red-700"
  },
  warning: {
    container: "bg-orange-100 border-l-4 border-orange-500 text-orange-700",
    title: "text-orange-800",
    msg: "text-orange-700"
  },
  info: {
    container: "bg-blue-100 border-l-4 border-blue-500 text-blue-700",
    title: "text-blue-800",
    msg: "text-blue-700"
  }
}, P = { class: "noti__container" }, N = /* @__PURE__ */ f({
  __name: "Notinoti",
  props: {
    notification: {
      type: Object,
      required: !0
    },
    classProp: {
      type: Object,
      required: !1,
      default: {
        container: "",
        title: "",
        msg: ""
      }
    }
  },
  setup(t) {
    const r = t, n = b(() => {
      const o = r.notification.type || "info", l = {
        success: e.success.container,
        error: e.error.container,
        warning: e.warning.container,
        info: e.info.container
      }, a = {
        success: e.success.title,
        error: e.error.title,
        warning: e.warning.title,
        info: e.info.title
      }, p = {
        success: e.success.msg,
        error: e.error.msg,
        warning: e.warning.msg,
        info: e.info.msg
      };
      return {
        container: l[o],
        title: a[o],
        msg: p[o]
      };
    });
    return (o, l) => t.notification ? (d(), g("div", {
      key: 0,
      class: c(["noti", t.notification.position || "topRight"])
    }, [
      s("div", P, [
        s("div", {
          class: c(["noti__content", `${t.classProp.container || n.value.container}`]),
          role: "alert"
        }, [
          s("p", {
            class: c(["noti__title", `${t.classProp.title || n.value.title}`])
          }, u(r.notification.title), 3),
          s("p", {
            class: c(["noti__msg", `${t.classProp.msg || n.value.msg}`])
          }, u(r.notification.msg), 3)
        ], 2)
      ])
    ], 2)) : v("", !0);
  }
}), $ = { class: "data-provider__wrapper_style_wrapper" }, D = /* @__PURE__ */ f({
  __name: "NotiProvider",
  props: {
    containerPadding: {
      type: Number,
      required: !1,
      default: 100,
      validator: (t) => t >= 0
    }
  },
  setup(t) {
    const { notifications: r } = I(), n = t;
    return (o, l) => (d(!0), g(_, null, x(w(r).values(), (a) => (d(), g("div", {
      class: "data-provider_style_provider_",
      key: a.id,
      style: h({ padding: `${n.containerPadding}px` })
    }, [
      s("div", $, [
        y(N, { notification: a }, null, 8, ["notification"])
      ])
    ], 4))), 128));
  }
});
class i {
  constructor() {
    this.notifications = m(
      /* @__PURE__ */ new Map()
    );
  }
  static getInstance() {
    return i.instance || (i.instance = m(new i())), i.instance;
  }
}
const C = (t) => {
  i.getInstance().notifications.delete(t);
}, k = (t) => {
  const r = i.getInstance();
  let n = Math.random() + Date.now().toString();
  for (; r.notifications.has(n); )
    n = Math.random() + Date.now().toString();
  t.id = n, r.notifications.set(n, t), setTimeout(() => {
    C(n);
  }, t.timeout || 2e3);
}, I = () => ({
  notifications: i.getInstance().notifications,
  addNotification: k
});
export {
  D as NotiProvider,
  I as useNotification
};
