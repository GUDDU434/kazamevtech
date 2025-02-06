import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Login from "../Pages/auth/Login";
import { AuthContext } from "./AuthContext";
import Loading from "../Components/Loader/Loading";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isInitialized) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  // const pathPermissions = {
  //   "/dashboard": "home",
  //   "/dashboard/user/edit": "home",
  //   "/dashboard/blog/posts": "blogs",
  //   "/dashboard/blog/new": "blogs",
  //   "/dashboard/chat/interface": "chat",
  //   "/dashboard/home": "home",
  //   "/dashboard/user/list": "users",
  //   "/dashboard/payment/in": "payments",
  //   "/dashboard/payment/out": "payments",
  //   "/dashboard/payment/in?tab=Payments": "payments",
  //   "/dashboard/payment/in?tab=Refund": "payments",
  //   "/dashboard/analytics/user-analytics": "analytics",
  //   "/dashboard/analytics/abha": "analytics",
  //   "/dashboard/analytics/uploaddocument": "analytics",
  //   "/dashboard/analytics/medicine-analytics": "analytics",
  //   "/dashboard/analytics/partner-analytics": "analytics",
  //   "/dashboard/analytics/webtraffic": "analytics",
  //   "/dashboard/order/partner/Pharmacy": "orders",
  //   "/dashboard/order/partner/Diagnostics": "orders",
  //   "/dashboard/order/mybsk": "orders",
  //   "/dashboard/order/insurance/agentlist": "orders",
  //   "/dashboard/order/doctor/partnerlist": "orders",
  //   "/dashboard/order-from-app/medicine": "orders",
  //   "/dashboard/order-from-app/package-list": "orders",
  //   "/dashboard/medicine/list": "orders",
  //   "/dashboard/order-from-app/lab-checkout-process": "orders",
  //   "/dashboard/order-from-app/lab-tabs": "orders",
  //   "/dashboard/order-from-app/doctor-table-list": "orders",
  //   "/dashboard/partners/medical-partners/CHEMIST%20AND%20DRUGIST": "partner",
  //   "/dashboard/partners/medical-partners/PATHOLOGY%20LAB": "partner",
  //   "/dashboard/partners/insurance-agent": "partner",
  //   "/dashboard/partners/diagnostic-create": "partner",
  //   "/dashboard/partners/doctor-partners": "partner",
  //   "/dashboard/dynamicscreens/template": "dynamic_screens",
  //   "/dashboard/dynamicscreens/screen/homepage": "dynamic_screens",
  //   "/dashboard/dynamicscreens/screen/expert": "dynamic_screens",
  //   "/dashboard/dynamicscreens/screen/shop": "dynamic_screens",
  //   "/dashboard/dynamicscreens/screen/lab": "dynamic_screens",
  //   "/dashboard/dynamicscreens/screen/medicinePage": "dynamic_screens",
  //   "/dashboard/dynamicscreens/screen/doctor_appointment": "dynamic_screens",
  //   "/dashboard/promocode/coupon": "promocode",
  // };
  // pathPermissions[`/dashboard/user/role/edit/${params?.id}`] = "home";
  // pathPermissions[`/dashboard/user/${params?.id}/details`] = "users";
  // pathPermissions[`/dashboard/partners/medical-partners/${params?.id}`] =
  //   "partner";
  // pathPermissions[
  //   `/dashboard/partners/medical-partners-profile/${params?.id}`
  // ] = "partner";
  // pathPermissions[
  //   `/dashboard/partners/medical-partners-profile/${params?.id}`
  // ] = "partner";
  // pathPermissions[`/dashboard/partners/doctor-profile/${params?.id}`] =
  //   "partner";
  // pathPermissions[`/dashboard/partners/insurance-agent-profile/${params?.id}`] =
  //   "partner";
  // pathPermissions[
  //   `/dashboard/partners/medical-partners-profile/${params?.id}?origin=orders`
  // ] = "partner";
  // pathPermissions[
  //   `/dashboard/partners/medical-partners-profile/${params?.id}?origin=branch`
  // ] = "partner";
  // pathPermissions[
  //   `/dashboard/partners/medical-partners-profile/${params?.id}?origin=orders`
  // ] = "partner";
  // pathPermissions[
  //   `/dashboard/partners/medical-partners-profile/${params?.id}?origin=LabPackages`
  // ] = "partner";
  // pathPermissions[
  //   `/dashboard/partners/doctor-profile/${params?.id}?origin=LabPackages`
  // ] = "partner";
  // pathPermissions[`/dashboard/order/partner/${params?.id}`] = "orders";
  // pathPermissions[`/dashboard/order/doctor/${params?.id}`] = "orders";
  // pathPermissions[`/dashboard/order/${params?.id}`] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/inquiry-individual/${params?.id}`
  // ] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/lab-checkout-individual-details/${params?.id}`
  // ] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/inquiry-individual/${params?.id}/comparisonSheet`
  // ] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/lab-comparison-sheet/${params?.id}`
  // ] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/lab-inquiry-individual/${params?.id}`
  // ] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/doctor-inquiry-individual/${params?.id}`
  // ] = "orders";
  // pathPermissions[
  //   `/dashboard/order-from-app/inquiry-individual/${params?.id}/viewComparisonSheet`
  // ] = "orders";
  // pathPermissions[`/dashboard/dynamicscreens/edit/${params?.id}`] =
  //   "dynamic_screens";

  // // console.log('P', pathname, 'Sdf', search, 'params', params);

  // if (!user?.permissions?.includes(pathPermissions[pathname])) {
  //   // Redirect the user if they don't have access to the current module
  //   return <Navigate to="/403" />;
  // }

  return <> {children} </>;
}
