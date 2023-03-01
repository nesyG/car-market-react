"use strict";(self.webpackChunkvehicle_react_project=self.webpackChunkvehicle_react_project||[]).push([[539],{539:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(791),n=t(444),s=t(357),c=t(165),i=t(861),l=t(263),o=t(98),u=t(184),p=(0,n.Pi)((function(){var e=r.useContext(s.T),a=e.paginationStore,t=a.resetDefaultPage,n=a.page,p=e.dataStore.getFilteredData,d=e.filterStore.params,h=e.sortingStore.sortData;function m(){return(m=(0,i.Z)((0,c.Z)().mark((function e(){var a,r,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),a="https://api.baasic.com/beta/new-react-project/resources/car?page=".concat(n,"&rpp=12"),h&&(a+="&sort=".concat(h),console.log(a)),e.next=5,l.Z.get(a,{headers:{"Content-type":"application/json"},params:d});case 5:return r=e.sent,e.next=8,r.data;case 8:s=e.sent,(0,o.z)((function(){p(s)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("button",{className:"btn btn-dark me-5 search-button",onClick:function(){return m.apply(this,arguments)},children:"Search"})})})),d=(0,n.Pi)((function(){var e=r.useContext(s.T),a=e.paginationStore,t=e.dataStore,n=e.filterStore,p=e.sortingStore;function d(){return(d=(0,i.Z)((0,c.Z)().mark((function e(){var r,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.resetSortData(),n.resetFilterState(),a.resetDefaultPage(),"https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12",e.next=6,l.Z.get("https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12",{headers:{"Content-type":"application/json"},params:n.params});case 6:return r=e.sent,e.next=9,r.data;case 9:s=e.sent,(0,o.z)((function(){t.getFilteredData(s)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("button",{className:"btn btn-light ms-5",onClick:function(){return d.apply(this,arguments)},children:"Reset Filters"})})})),h=(0,n.Pi)((function(){var e=r.useContext(s.T).filterStore,a=e.filterData,t=e.setFilterData,n=e.makeParams;function c(e){var a=e.target.name,r=e.target.value;t(a,r),n()}return(0,u.jsxs)("div",{className:"browse-buttons-container",children:[(0,u.jsx)("span",{className:"lead",children:"Filter:"}),(0,u.jsx)("div",{className:"browseButtonsContainer",children:[{name:"car",labelText:"Which brand are you looking for?",labelPlaceholder:"Volkswagen"},{name:"car_model",labelText:"Which car model would you like to see?",labelPlaceholder:"Golf 4"},{name:"car_model_year",labelText:"Which model year?",labelPlaceholder:"2000"},{name:"car_color",labelText:"Any particular color?",labelPlaceholder:"Navy Blue"}].map((function(e){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"form-floating mb-3",children:[(0,u.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:e.labelPlaceholder,name:e.name,value:a[e.name],onChange:c}),(0,u.jsx)("label",{htmlFor:"floatingInput",children:e.labelText})]})},e.name)}))}),(0,u.jsx)(p,{}),(0,u.jsx)(d,{})]})})),m=(0,n.Pi)((function(e){var a=r.useContext(s.T).paginationStore;return(0,u.jsxs)("div",{className:"pagination-section",children:[(0,u.jsx)("button",{className:"btn btn-light",onClick:function(){a.setPreviousPage(),e.changePage()},children:"Previous Page"}),(0,u.jsx)("span",{className:"currentPage page-link",children:a.page}),(0,u.jsx)("button",{className:"btn btn-light",onClick:function(){a.setNextPage(),e.changePage()},children:"Next Page"})]})})),x=(0,n.Pi)((function(){var e=r.useContext(s.T),a=e.paginationStore,t=e.dataStore,n=e.filterStore,p=e.sortingStore,d=e.tokenStore;function h(){return(h=(0,i.Z)((0,c.Z)().mark((function e(){var r,s,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.baasic.com/beta/new-react-project/resources/car?page=".concat(a.page,"&rpp=12"),p.sortData&&(r+="&sort=".concat(p.sortData)),e.next=4,l.Z.get(r,{headers:{"Content-type":"application/json"},params:n.params});case 4:return s=e.sent,e.next=7,s.data;case 7:if((i=e.sent).item.length){e.next=11;break}return a.setPreviousPage(),e.abrupt("return");case 11:(0,o.z)((function(){t.getFilteredData(i)}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.useEffect)((function(){t.getCarData(d.token)}),[t,d.token]),(0,u.jsxs)("div",{className:"data-container",children:[(0,u.jsxs)("div",{className:"sorting-section",children:[(0,u.jsx)("span",{className:"lead",children:"Sort by:"}),(0,u.jsxs)("select",{className:"form-select form-select-sm sort-container","aria-label":"Default select",onChange:function(e){var a=e.target.value;p.setSortData(a)},value:p.sortData,children:[(0,u.jsx)("option",{value:"",children:null}),(0,u.jsx)("option",{value:"price|asc",children:"Price (Lowest to Highest)"}),(0,u.jsx)("option",{value:"price|desc",children:"Price (Highest to Lowest)"})]})]}),(0,u.jsx)("div",{className:"card-container",children:void 0!==t.carData&&t.carData.item?t.carData.item.map((function(e){return(0,u.jsxs)("div",{className:"card car-card",children:[(0,u.jsx)("span",{className:"material-symbols-outlined",children:"car_rental"}),(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h4",{className:"card-title",children:e.car}),(0,u.jsxs)("ul",{className:"list-group list-group-flush",children:[(0,u.jsx)("li",{className:"list-group-item",children:e.car_model}),(0,u.jsx)("li",{className:"list-group-item",children:e.car_model_year}),(0,u.jsx)("li",{className:"list-group-item",children:e.car_color}),(0,u.jsx)("li",{className:"list-group-item price-text",children:e.price})]})]})]},e.id)})):(0,u.jsx)("div",{className:"spinner",children:(0,u.jsx)("div",{className:"spinner-border",role:"status",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),(0,u.jsx)(m,{changePage:function(){return h.apply(this,arguments)}})]})})),g=(0,n.Pi)((function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:"h1 home-h1",children:"Find your dream car"}),(0,u.jsxs)("div",{className:"hero-section",children:[(0,u.jsx)(h,{}),(0,u.jsx)(x,{})]})]})}))}}]);
//# sourceMappingURL=539.d656c974.chunk.js.map