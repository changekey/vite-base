import axios from "@/api";
// 首页广告接口
export const getCnise = () => {
  return axios.get("/v3/page/advertising/cnise");
};
// 首页数据接口
export const getHome = () => {
  return axios.get("/v3/page/home");
};
// 菜单栏接口
export const getMenu = () => {
  return axios.get("/v3/api/common/data");
};
// 展商列表
export const getCompany = () => {
  return axios.get("/v3/page/company");
};
// 参展商列表
export const getCompanyList = (params) => {
  return axios.get("/v3/api/company", { params });
};
// 展商主页
export const getCompanyHeadList = (id) => {
  return axios.get(`/v3/page/company/${id}/head`);
};
// 展商主页-产品
export const getCompanyProductList = (id, params) => {
  return axios.get(`/v3/api/company/${id}/product`, { params });
};
// 展商主页-首页
export const getCompanyHomeList = (id) => {
  return axios.get(`/v3/api/company/${id}/home`);
};
// 展商主页-介绍
export const getCompanyIntroduceList = (id) => {
  return axios.get(`/v3/api/company/${id}/introduce`);
};
// 展商主页-新闻
export const getCompanyNewsList = (id, params) => {
  return axios.get(`/v3/api/company/${id}/news`, { params });
};
// 展商主页-视频
export const getCompanyVideoList = (id, params) => {
  return axios.get(`/v3/api/company/${id}/video`, { params });
};
// 展商主页-联系我们
export const getCompanyContactList = (id) => {
  return axios.get(`/v3/api/company/${id}/contact`);
};
// 收藏/取消收藏
export const toggleCollect = (params) => {
  return axios.post("/v3/api/toggle_collect", params);
};
// 展品列表
export const getProduct = () => {
  return axios.get("/v3/page/product");
};
// 产品列表查询
export const getProductList = (params) => {
  return axios.get("/v3/api/product", { params });
};
// 产品详情
export const productDetails = (id) => {
  return axios.get(`/v3/page/product/${id}`);
};
// 登录页面数据
export const getLogin = () => {
  return axios.get("/v3/page/login");
};
// 登录接口
export const login = (params) => {
  return axios.post("/v3/api/login", params);
};
// 发送验证码
export const sendCode = (params) => {
  return axios.post("/v3/api/send_code", params);
};
// 买家登记
export const buyerCheckin = (params) => {
  return axios.get("/v3/page/buyer/checkin", { params });
};
// 提交买家资料
export const submitBuyer = (params) => {
  return axios.post("/v3/api/buyer/checkin", params);
};
// 买家问卷
export const buyerSurvey = (params) => {
  return axios.get(`/v3/page/buyer/survey`, { params });
};
// 提交买家问卷
export const submitBuyerSurvey = (params) => {
  return axios.post("/v3/api/buyer/survey", params);
};
// 买家中心
export const buyerCenter = (params) => {
  return axios.get(`/v3/page/buyer/center`, { params });
};
// 上传人脸照片
export const uploadFace = (params) => {
  return axios.post("/v3/api/buyer/face/upload", params);
};
// [页面]展商中心
export const sellerCenter = (params) => {
  return axios.get("/v3/page/seller/center", { params });
};
//[页面]展务-层板主页
export const exhibitorLaminate = (params) => {
  return axios.get("/v3/page/exhibitor/laminate", { params });
};
// [接口]层板无需安放
export const abandonLaminate = (params) => {
  return axios.post("/v3/api/laminate/abandon", params);
};
// [接口]撤销无需安放的层板
export const putLaminate = (params) => {
  return axios.post("/v3/api/laminate/cancel_abandon", params);
};
// [接口]设置层板安放
export const setLaminate = (params) => {
  return axios.post("/v3/api/laminate/set", params);
};
// [接口]层板确认
export const confirmLaminate = (params) => {
  return axios.post("/v3/api/laminate/confirm", params);
};
// 搜索企业员工
export const searchStaff = (params) => {
  return axios.get("/v3/api/company/staff/search", { params });
};
// [页面]展务-楣板
export const exhibitorLintel = (params) => {
  return axios.get(`/v3/page/exhibitor/lintel`, { params });
};
// [接口]展务-楣板确认
export const confirmLintel = (params) => {
  return axios.post("/v3/api/lintel/confirm", params);
};
// [接口]展务-楣板新增公司
export const addLintelCompany = (params) => {
  return axios.post("/v3/api/lintel/add_company", params);
};
// [接口]展务-楣板公司-支付
export const addLintelCompanyPay = (params) => {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604. MicroMessenger",
  };
  return axios.post("/v3/api/lintel/add_company/pay", params, { headers });
};
// [页面]展务-摊位配送
export const exhibitorBoothAddition = (params) => {
  return axios.get(`/v3/page/exhibitor/booth_addition`, { params });
};
// [接口]展务-摊位配送确认
export const confirmBoothAddition = (params) => {
  return axios.post("/v3/api/booth_addition/confirm", params);
};
// [页面]展务-物资兑换券
export const exhibitorSuppliesCoupon = (params) => {
  return axios.get(`/v3/page/exhibitor/supplies_coupon`, { params });
};

// [页面]展务-参展证管理
export const exhibitorBadge = (params) => {
  return axios.get(`/v3/page/exhibitor/badge`, { params });
};
// [接口]展务-参展历史人员
export const getBadgeHostory = (params) => {
  return axios.get(`/v3/api/seller_badge/hostory`, { params });
};
// [接口]展务-参展证打印
export const checkBadge = (params) => {
  return axios.get(`/v3/api/seller_badge/check`, { params });
};
// [接口]展务-参展证删除
export const deleteBadge = (params) => {
  return axios.get(`/v3/api/seller_badge/delete`, { params });
};
// [接口]展务-参展证 新增 编辑
export const saveBadge = (params) => {
  return axios.post("/v3/api/seller_badge/save", params);
};
// [接口]展务-参展快递地址
export const expressAddr = (params) => {
  return axios.post("/v3/api/seller_badge/express_addr", params);
};
// [接口]展务-导入参展历史人员
export const importBadge = (params) => {
  return axios.post("/v3/api/seller_badge/import", params);
};
//  [页面]展务-展具租赁
export const exhibitorAddition = (params) => {
  return axios.get(`/v3/page/exhibitor/addition`, { params });
};
// [页面]展务-广告投放
export const exhibitorAdvert = (params) => {
  return axios.get(`/v3/page/exhibitor/advert`, { params });
};
// [页面]展务-展品管理
export const exhibitorExhibit = (params) => {
  return axios.get(`/v3/page/exhibitor/exhibit`, { params });
};
// [接口]展务-展品列表
export const exhibitorExhibitList = (params) => {
  return axios.get(`/v3/api/hall/exhibit`, { params });
};
// [页面]展务-新增展品
export const exhibitorExhibitForm = (params) => {
  return axios.get(`/v3/page/exhibit/form`, { params });
};
// [接口]展务-保存展品
export const exhibitorExhibitSave = (params) => {
  return axios.post("/v3/api/exhibit/save", params);
};
// [页面]展务-从产品库载入
export const exhibitorExhibitFormProduct = (params) => {
  return axios.get(`/v3/page/exhibit/from/product`, { params });
};
// [接口]展务-产品库
export const exhibitorExhibitUnjoinProducts = (params) => {
  return axios.get(`/v3/api/exhibit/unjoin_products`, { params });
};
// [接口]展务-展品移除
export const exhibitorExhibitDelete = (params) => {
  return axios.post("/v3/api/exhibit/delete", params);
};
// [接口]展务-导入展品
export const exhibitorExhibitImport = (params) => {
  return axios.post("/v3/api/exhibit/import", params);
};
// [接口]图片上传
export const ossPolicy = (params) => {
  return axios.get("/v3/api/oss_policy", { params });
};
// [页面]展务-合同管理
export const exhibitorContract = (params) => {
  return axios.get(`/v3/page/exhibitor/contract`, { params });
};
// [接口]展务-合同回传
export const exhibitorContractReturn = (params) => {
  return axios.post("/v3/api/contract/return", params);
};
// [页面]展务-发票管理
export const exhibitorInvoice = (params) => {
  return axios.get("/v3/page/exhibitor/invoice", { params });
};
// [接口]展务-发票申请
export const exhibitorInvoiceApply = (params) => {
  return axios.post("/v3/api/invoice/apply", params);
};
// [页面]展务-VIP参观证
export const exhibitorInvite = (params) => {
  return axios.get("/v3/page/exhibitor/invite", { params });
};
// [接口]展务-VIP参观证邀请列表
export const exhibitorInviteList = (params) => {
  return axios.get("/v3/api/exhibitor/invite", { params });
};
// [页面]展务-匹配买家
export const exhibitorMatchBuyer = (params) => {
  return axios.get("/v3/page/exhibitor/match/buyer", { params });
};
// [页面]展务-已预约买家
export const exhibitorReceiveVisit = () => {
  return axios.get("/v3/page/exhibitor/receive/visit");
};
// [接口]展务-预约列表
export const exhibitorVisitList = (params) => {
  return axios.get("/v3/api/exhibitor/visit/list", { params });
};
// [接口]展务-预约回复
export const exhibitorVisitReply = (params) => {
  return axios.post("/v3/api/exhibitor/visit/reply", params);
};
// [接口]展务-购买展具或广告
export const additionOrder = (params) => {
  return axios.post("/v3/api/addition/order", params);
};
// [接口]展务-代付证明上传
export const uploadProve = (params) => {
  return axios.post("/v3/api/pay/prove/upload", params);
};
// [接口]-展具支付
export const additionPay = (params) => {
  return axios.post("/v3/api/addition/pay", params);
};
// [接口]展图-VIP参观证-发送短信
export const sendInviteSms = (params) => {
  return axios.post("/v3/api/exhibitor/send_invite/sms", params);
};
// [接口]展图-VIP参观证-发送邮件
export const sendInviteEmail = (params) => {
  return axios.post("/v3/api/exhibitor/send_invite/email", params);
};
// [接口]展务-匹配买家-发送
export const sendMatchBuyer = (params) => {
  return axios.get(`/v3/api/exhibitor/match_buyer/send`, { params });
};
// [页面]展务-展具-已购买
export const exhibitorAdditionShop = (params) => {
  return axios.get(`/v3/page/exhibitor/addition_shop`, { params });
};
// [接口]展务-展具-确认展位
export const setHall = (params) => {
  return axios.post("/v3/api/addition/set_hall", params);
};

// oss上传
export const postUpload = async (axios, file, { policy }) => {
  if (Object.keys(policy).length > 0) {
    // 创建 FormData 对象
    const formData = new FormData();
    // 向 FormData 添加必要的参数
    formData.append("key", policy.filename);
    formData.append("policy", policy.policy);
    formData.append("OSSAccessKeyId", policy.accessid);
    formData.append("success_action_status", "200");
    formData.append("signature", policy.signature);
    formData.append("file", file);
    // 发送请求
    const res = await axios.post(
      policy.host,
      formData
      //    {
      //   headers: {
      //     Authorization: `Bearer ${0}`,
      //   },
      //   async: false,
      // }
    );
    return res;
  }
};

//[页面]邀请函
export const getInvite = (params) => {
  return axios.get("/v3/page/seller/invite", { params });
};
// [接口]预约参观
export const applyVisit = (params) => {
  return axios.post("/v3/api/visit/buyer/apply", params);
};
// [接口]上传证件信息
export const uploadIdcard = (params) => {
  return axios.post("/v3/api/buyer/idcard/upload", params);
};
// [页面]特邀买家
export const getSpeciallyInvite = (params) => {
  return axios.get("/v3/page/buyer/specially_invite", { params });
};
// [接口]特邀买家申请
export const applySpeciallyInvite = (params) => {
  return axios.post("/v3/api/buyer/specially_invite/apply", params);
};
// 我的卡包
export const getCoupon = (params) => {
  return axios.get("/v3/page/buyer/coupon", { params });
};
// [页面]邀请好友
export const getBuyerInvite = (params) => {
  return axios.get("/v3/page/buyer/invite", { params });
};
// [接口]邀请好友-列表
export const getBuyerInviteList = (params) => {
  return axios.get("/v3/api/buyer/invite", { params });
};
// [接口]邀请好友-发送短信
export const sendBuyerInviteSms = (params) => {
  return axios.post("/v3/api/buyer/send_invite/sms", params);
};
// [接口]邀请好友-发送邮件
export const sendBuyerInviteEmail = (params) => {
  return axios.post("/v3/api/buyer/send_invite/email", params);
};
// [页面]我的展商-预约
export const getBuyerAppointment = (params) => {
  return axios.get("/v3/page/buyer/appointment", { params });
};
// [接口]我的展商-预约
export const getBuyerAppointmentList = (params) => {
  return axios.get("/v3/api/buyer/appointment", { params });
};
// [接口]我的展商-取消预约
export const cancelAppointment = (params) => {
  return axios.post("/v3/api/buyer/appointment/cancel", params);
};
