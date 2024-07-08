import { defineComponent as m, computed as v, openBlock as d, createElementBlock as g, normalizeClass as l, createElementVNode as c, toDisplayString as u, createCommentVNode as _, Fragment as x, renderList as w, unref as h, normalizeStyle as y, createVNode as N, reactive as f } from "vue";
const P = {
  container: "bg-green-100 border-l-4 border-green-500 text-green-700",
  title: "text-green-800",
  msg: "text-green-700"
}, I = {
  container: "bg-red-100 border-l-4 border-red-500 text-red-700",
  title: "text-red-800",
  msg: "text-red-700"
}, $ = {
  container: "bg-orange-100 border-l-4 border-orange-500 text-orange-700",
  title: "text-orange-800",
  msg: "text-orange-700"
}, k = {
  container: "bg-blue-100 border-l-4 border-blue-500 text-blue-700",
  title: "text-blue-800",
  msg: "text-blue-700"
}, o = {
  success: P,
  error: I,
  warning: $,
  info: k
}, C = { class: "noti__container" }, q = /* @__PURE__ */ m({
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
    const n = t, e = v(() => {
      const i = n.notification.type || "info", s = {
        success: o.success.container,
        error: o.error.container,
        warning: o.warning.container,
        info: o.info.container
      }, a = {
        success: o.success.title,
        error: o.error.title,
        warning: o.warning.title,
        info: o.info.title
      }, b = {
        success: o.success.msg,
        error: o.error.msg,
        warning: o.warning.msg,
        info: o.info.msg
      };
      return {
        container: s[i],
        title: a[i],
        msg: b[i]
      };
    });
    return (i, s) => t.notification ? (d(), g("div", {
      key: 0,
      class: l(["noti", t.notification.position || "topRight"])
    }, [
      c("div", C, [
        c("div", {
          class: l(["noti__content", `${t.classProp.container || e.value.container}`]),
          role: "alert"
        }, [
          c("p", {
            class: l(["noti__title", `${t.classProp.title || e.value.title}`])
          }, u(n.notification.title), 3),
          c("p", {
            class: l(["noti__msg", `${t.classProp.msg || e.value.msg}`])
          }, u(n.notification.msg), 3)
        ], 2)
      ])
    ], 2)) : _("", !0);
  }
}), p = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [i, s] of n)
    e[i] = s;
  return e;
}, D = /* @__PURE__ */ p(q, [["__scopeId", "data-v-0777df91"]]), M = { class: "provider__wrapper" }, O = /* @__PURE__ */ m({
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
    const { notifications: n } = j(), e = t;
    return (i, s) => (d(!0), g(x, null, w(h(n).values(), (a) => (d(), g("div", {
      class: "provider",
      key: a.id,
      style: y({ padding: `${e.containerPadding}px` })
    }, [
      c("div", M, [
        N(D, { notification: a }, null, 8, ["notification"])
      ])
    ], 4))), 128));
  }
}), B = /* @__PURE__ */ p(O, [["__scopeId", "data-v-b97e8743"]]);
class r {
  constructor() {
    this.notifications = f(
      /* @__PURE__ */ new Map()
    );
  }
  static getInstance() {
    return r.instance || (r.instance = f(new r())), r.instance;
  }
}
const S = (t) => {
  r.getInstance().notifications.delete(t);
}, V = (t) => {
  const n = r.getInstance();
  let e = Math.random() + Date.now().toString();
  for (; n.notifications.has(e); )
    e = Math.random() + Date.now().toString();
  t.id = e, n.notifications.set(e, t), console.log(n.notifications), setTimeout(() => {
    S(e);
  }, t.timeout || 2e3);
}, j = () => ({
  notifications: r.getInstance().notifications,
  addNotification: V
});
export {
  B as NotiProvider,
  j as useNotification
};
