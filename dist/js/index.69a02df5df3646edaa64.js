/*! For license information please see index.69a02df5df3646edaa64.js.LICENSE.txt */
(()=>{var e,t,n={3732:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(6539),t),o(n(2038),t),o(n(3386),t)},600:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClientHttpType=void 0,function(e){e.apolloClient="apolloClient",e.axiosClient="axiosClient"}(t.ClientHttpType||(t.ClientHttpType={}))},3386:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FragmentEnumType=void 0,function(e){e.CourseTypeFull="CourseTypeFull",e.CreateBotResponseTypeFull="CreateBotResponseTypeFull",e.CreateContentMetaDataTypeFull="CreateContentMetaDataTypeFull",e.CreateYoutubeTranscriptTypeFull="CreateYoutubeTranscriptTypeFull",e.DocumentTypeFull="DocumentTypeFull",e.ModuleTypeFull="ModuleTypeFull",e.ProfileTypeFull="ProfileTypeFull",e.ProfileTypeShort="ProfileTypeShort"}(t.FragmentEnumType||(t.FragmentEnumType={}))},7398:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MethodHttpEnumType=void 0,function(e){e.get="get",e.head="head",e.post="post",e.put="put",e.delete="delete",e.connect="connect",e.options="options",e.trace="trace",e.patch="patch",e.GET="GET",e.HEAD="HEAD",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e.CONNECT="CONNECT",e.OPTIONS="OPTIONS",e.TRACE="TRACE",e.PATCH="PATCH"}(t.MethodHttpEnumType||(t.MethodHttpEnumType={}))},5538:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.apolloClient=t.createApolloClient=void 0;const o=r(n(2674)),i=n(3234),a=n(6626),{timeout:s}=a.SERVERS_MAIN;t.createApolloClient=(e,t,n,r=s)=>{const a=new o.default(r),c=((e,t,n)=>new i.HttpLink({uri:`${e}${t}`,headers:n}))(e,t,n),l=a.concat(c);return new i.ApolloClient({link:l,cache:new i.InMemoryCache,connectToDevTools:!0,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}})};t.apolloClient=(e,n,r,o)=>(0,t.createApolloClient)(e,n,r,o)},3877:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.axiosClient=void 0;const o=r(n(1429)),i=n(6626),{timeout:a}=i.SERVERS_MAIN;t.axiosClient=(e,t,n=a)=>o.default.create({baseURL:`${e}`,timeout:n,headers:t})},2038:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getHeadersAuthDict=void 0;t.getHeadersAuthDict=(e,t)=>{const{tokenBearer:n,refresh_token:r,redirect_uri:o,client_app:i}=e;let a={};n?a={Authorization:`Bearer ${n}`}:r&&o&&i&&(a={"refresh-token":r,"redirect-uri":o,"client-app":i});const s={"Access-Control-Allow-Origin":"*","Content-Type":"application/json",timestamp:""+ +new Date,...a};return t?.printRes&&console.log("getHeaders [35]",{headers:s}),s}},1793:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CourseTypeFull=void 0;const r=n(3234);t.CourseTypeFull=r.gql`
  fragment CourseTypeFull on CourseType {
    courseID
    profileID
    capture
    description
    language
    isActive
    dateCreated
    dateUpdated
    dateDeleted
    modules {
      moduleID
      index
      isActive
      contentType
      contentID
      capture
      duration
      questionNumber
      passRate
      thumbnails {
        default {
          url
          width
          height
        }
        medium {
          url
          width
          height
        }
        high {
          url
          width
          height
        }
        standard {
          url
          width
          height
        }
        maxres {
          url
          width
          height
        }
      }
      questions {
        questionID
        capture
        isActive
        options {
          optionID
          label
          status
        }
      }
      summary {
        capture
        text
      }
      objections {
        capture
        text
      }
    }
  }
`},9254:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateBotResponseTypeFull=void 0;const r=n(3234);t.CreateBotResponseTypeFull=r.gql`
  fragment CreateBotResponseTypeFull on CreateBotResponseType {
    botID
    profileID
    profileName
    textObj {
      contentType
      contentArray
    }
    isBotResponse
    length
  }
`},20:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateContentMetaDataTypeFull=void 0;const r=n(3234);t.CreateContentMetaDataTypeFull=r.gql`
  fragment CreateContentMetaDataTypeFull on CreateContentMetaDataType {
    contentID
    capture
    description
    duration
    language
    tags
    thumbnails {
      default {
        url
        width
        height
      }
      medium {
        url
        width
        height
      }
      high {
        url
        width
        height
      }
      standard {
        url
        width
        height
      }
      maxres {
        url
        width
        height
      }
    }
    length
    isContentMetaData
  }
`},1391:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateYoutubeTranscriptTypeFull=void 0;const r=n(3234);t.CreateYoutubeTranscriptTypeFull=r.gql`
  fragment CreateYoutubeTranscriptTypeFull on CreateYoutubeTranscriptType {
    transcript
    transcriptList {
      start
      duration
      text
    }
    length
    isTranscript
  }
`},817:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentTypeFull=void 0;const r=n(3234),o=n(4544),i=n(9281);t.DocumentTypeFull=r.gql`
  fragment DocumentTypeFull on DocumentType {
    documentID
    dateCreated
    dateDeleted
    dateUpdated
    isActive
    module {
      ...ModuleTypeFull
    }
    learner {
      ...ProfileTypeFull
    }
    creator {
      ...ProfileTypeFull
    }
  }
  ${o.ModuleTypeFull}
  ${i.ProfileTypeFull}
`},4544:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleTypeFull=void 0;const r=n(3234);t.ModuleTypeFull=r.gql`
  fragment ModuleTypeFull on ModuleType {
    moduleID
    creatorID
    organizationID
    contentID
    isActive
    capture
    description
    language
    dateCreated
    dateUpdated
    dateDeleted
    stages
    tags
    index
    contentType
    capture
    duration
    questionNumber
    passRate
    thumbnails {
      default {
        url
        width
        height
      }
      medium {
        url
        width
        height
      }
      high {
        url
        width
        height
      }
      standard {
        url
        width
        height
      }
      maxres {
        url
        width
        height
      }
    }
    transcriptList {
      transcriptItemID
      start
      duration
      text
    }
    summary {
      summaryItemID
      capture
      text
    }
    questions {
      questionID
      capture
      isActive
      options {
        optionID
        label
        status
        answer
      }
    }
    objections {
      objectionID
      capture
      text
    }
  }
`},9281:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileTypeFull=void 0;const r=n(3234);t.ProfileTypeFull=r.gql`
  fragment ProfileTypeFull on ProfileType {
    profileID
    userID
    botID
    isActive
    dateCreated
    dateUpdated
    dateDeleted
    profileNature
    profileName
    nameFirst
    nameMiddle
    nameLast
    position
    avatarSrc
    avatarSize {
      width
      height
    }
    phones
    emails
    messengers {
      name
      profileName
    }
    locations
    serviceSpecs
    description
    imagePendingSrc
    pendingText
    help
    promptExamples
    disclaimer
    affiliation
    jobTitle
    awards
    urls
  }
`},6840:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileTypeShort=void 0;const r=n(3234);t.ProfileTypeShort=r.gql`
  fragment ProfileTypeShort on ProfileType {
    profileID
    userID
    botID
    isActive
    nameFirst
    nameMiddle
    nameLast
    description
    affiliation
    jobTitle
    awards
    urls
    avatarSrc
    avatarSize {
      width
      height
    }
  }
`},253:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(1793),t),o(n(9254),t),o(n(20),t),o(n(1391),t),o(n(817),t),o(n(4544),t),o(n(9281),t),o(n(6840),t)},6539:function(e,t,n){"use strict";e=n.nmd(e);var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getResponseGraphqlAsync=t.graphqlQueries=void 0;const a=n(1100),s=n(3877),c=n(5538),l=n(600),u=n(7398),f=n(3090),d=i(n(8496)),p=n(2038),m=n(1058),h=n(6626),b=n(8955);(0,m.getDetectedEnv)();t.graphqlQueries=d;const y={printRes:!1,tokenBearer:void 0,refresh_token:void 0,redirect_uri:void 0,client_app:void 0,pathname:"/graphql",clientHttpType:l.ClientHttpType.axiosClient,isPrintingCurl:!1};t.getResponseGraphqlAsync=async({variables:e,resolveGraphqlName:n,fragmentName:r},o)=>{const i={...y,...o},{printRes:d,baseUrlOptional:g,tokenBearer:v,refresh_token:_,redirect_uri:w,client_app:x,pathname:O,clientHttpType:E,isPrintingCurl:S,timeout:k}=i,T=(0,p.getHeadersAuthDict)({tokenBearer:v,refresh_token:_,redirect_uri:w,client_app:x});try{const o=(0,m.getDetectedEnv)(),i=g||h.SERVERS_MAIN[o],p=E===l.ClientHttpType.apolloClient?c.apolloClient:s.axiosClient,y=t.graphqlQueries[`${n}Gql`](r),v=y?.definitions[0]?.operation;let _,w={operationName:n,variables:(0,f.getObjectCleared)(e,{propsToRemove:["__typename"]})};if(E===l.ClientHttpType.apolloClient){let e;"mutation"===v?(w={...w,mutation:y},e=await p(i,O,T,k).mutate(w)):(w={...w,query:y},e=await p(i,O,T,k).query(w)),_=e?.data[n]}else if(E===l.ClientHttpType.axiosClient){w={...w,query:(0,a.print)(y)};const e={url:`${i}${O}`,method:u.MethodHttpEnumType.post,data:w,options:{headers:T}},t={printRes:S,requestVehicle:b.RequestVehicleEnumType.axios};(0,b.getParamsToCurlString)(e,t);const r=await p(i,T,k)({url:O,data:w,method:u.MethodHttpEnumType.post});_=r?.data?.data[n]}return d&&console.log("getResponseGraphqlAsync","output",_),_}catch(e){return void console.log("getResponseGraphqlAsync",e)}},n.c[n.s]===e&&console.log("This file is being run directly.")},3705:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.countCoursesGql=void 0;const r=n(3234);t.countCoursesGql=()=>r.gql`
  query countCourses {
    countCourses
  }
`},6229:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.countDocumentsGql=void 0;const r=n(3234);t.countDocumentsGql=()=>r.gql`
  query countDocuments {
    countDocuments
  }
`},3200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.countModulesGql=void 0;const r=n(3234);t.countModulesGql=()=>r.gql`
  query countModules {
    countModules
  }
`},7033:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.countProfilesGql=void 0;const r=n(3234);t.countProfilesGql=()=>r.gql`
  query countProfiles {
    countProfiles
  }
`},2316:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createBotResponseGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createBotResponseGql=(e=c.FragmentEnumType.CreateBotResponseTypeFull)=>a.gql`
  mutation createBotResponse(
    $createBotResponseInput: CreateBotResponseInputType!
  ) {
    createBotResponse(createBotResponseInput: $createBotResponseInput) {
      ...${e}
    }
  }
  ${l[e]}
`},3526:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createContentMetaDataGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createContentMetaDataGql=(e=c.FragmentEnumType.CreateContentMetaDataTypeFull)=>a.gql`
  mutation createContentMetaData(
    $createContentMetaDataInput: CreateOriginInputType!
  ) {
    createContentMetaData(
      createContentMetaDataInput: $createContentMetaDataInput
    ) {
      ...${e}
    }
  }
  ${l[e]}
`},1316:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createCoursesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createCoursesGql=(e=c.FragmentEnumType.CourseTypeFull)=>a.gql`
  mutation createCourses($createCoursesInput: [CreateCourseInputType!]!) {
    createCourses(createCoursesInput: $createCoursesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},9416:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDocumentsGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createDocumentsGql=(e=c.FragmentEnumType.DocumentTypeFull)=>a.gql`
  mutation createDocuments($createDocumentsInput: [CreateDocumentInputType!]!) {
    createDocuments(createDocumentsInput: $createDocumentsInput) {
      ...${e}
    }
  }
  ${l[e]}
`},797:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createModulesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createModulesGql=(e=c.FragmentEnumType.ModuleTypeFull)=>a.gql`
  mutation createModules($createModulesInput: [CreateModuleInputType!]!) {
    createModules(createModulesInput: $createModulesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},7926:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createProfilesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createProfilesGql=(e=c.FragmentEnumType.ProfileTypeFull)=>a.gql`
  mutation createProfiles($createProfilesInput: [CreateProfileInputType!]!) {
    createProfiles(createProfilesInput: $createProfilesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},5583:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSiteMapGql=void 0;const r=n(3234);t.createSiteMapGql=()=>r.gql`
  mutation createSiteMap {
    createSiteMap {
      collectionsUrls
      modulesUrls
      articlesUrls
    }
  }
`},99:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createYoutubeTranscriptGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.createYoutubeTranscriptGql=(e=c.FragmentEnumType.CreateYoutubeTranscriptTypeFull)=>a.gql`
  mutation createYoutubeTranscript(
    $createYoutubeTranscriptInput: CreateOriginInputType!
  ) {
    createYoutubeTranscript(
      createYoutubeTranscriptInput: $createYoutubeTranscriptInput
    ) {
      ...${e}
    }
  }
  ${l[e]}
`},7518:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deactivateCoursesGql=void 0;const r=n(3234);t.deactivateCoursesGql=()=>r.gql`
  mutation deactivateCourses($deactivateCoursesIdsInput: [String!]!) {
    deactivateCourses(deactivateCoursesIdsInput: $deactivateCoursesIdsInput)
  }
`},8766:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deactivateDocumentsGql=void 0;const r=n(3234);t.deactivateDocumentsGql=()=>r.gql`
  mutation deactivateDocuments($deactivateDocumentsIdsInput: [String!]!) {
    deactivateDocuments(
      deactivateDocumentsIdsInput: $deactivateDocumentsIdsInput
    )
  }
`},8003:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deactivateModulesGql=void 0;const r=n(3234);t.deactivateModulesGql=()=>r.gql`
  mutation deactivateModules($deactivateModulesIdsInput: [String!]!) {
    deactivateModules(deactivateModulesIdsInput: $deactivateModulesIdsInput)
  }
`},3376:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deactivateProfilesGql=void 0;const r=n(3234);t.deactivateProfilesGql=()=>r.gql`
  mutation deactivateProfiles($deactivateProfilesIdsInput: [String!]!) {
    deactivateProfiles(deactivateProfilesIdsInput: $deactivateProfilesIdsInput)
  }
`},6069:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAuthAwsCognitoUserDataGql=void 0;const r=n(3234);t.getAuthAwsCognitoUserDataGql=()=>r.gql`
  query getAuthAwsCognitoUserData(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getAuthAwsCognitoUserData(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      refresh_token
      message
    }
  }
`},8623:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAuthAwsCognitoUserRefreshedGql=void 0;const r=n(3234);t.getAuthAwsCognitoUserRefreshedGql=()=>r.gql`
  query getAuthAwsCognitoUserRefreshed(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getAuthAwsCognitoUserRefreshed(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      message
    }
  }
`},267:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAuthAwsCognitoUserRevokedGql=void 0;const r=n(3234);t.getAuthAwsCognitoUserRevokedGql=()=>r.gql`
  query getAuthAwsCognitoUserRevoked(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getAuthAwsCognitoUserRevoked(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      message
    }
  }
`},8496:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(3705),t),o(n(6229),t),o(n(2316),t),o(n(3526),t),o(n(1316),t),o(n(9416),t),o(n(99),t),o(n(7518),t),o(n(8766),t),o(n(6069),t),o(n(8623),t),o(n(267),t),o(n(2504),t),o(n(984),t),o(n(7924),t),o(n(6468),t),o(n(8936),t),o(n(7219),t),o(n(2641),t),o(n(2221),t),o(n(3200),t),o(n(797),t),o(n(8003),t),o(n(9193),t),o(n(8685),t),o(n(7240),t),o(n(1477),t),o(n(4545),t),o(n(7033),t),o(n(7926),t),o(n(3376),t),o(n(7894),t),o(n(7382),t),o(n(5583),t)},2504:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.readCompetencyTagsGql=void 0;const r=n(3234);t.readCompetencyTagsGql=()=>r.gql`
  query readCompetencyTags($params: CompetencyTagsParamsReadType!) {
    readCompetencyTags(params: $params) {
      competencyID
      profileID
      title
      contentType
      section
      linkHref
      iconLibrary
      iconName
      tooltips
    }
  }
`},984:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readCoursesConnectionGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readCoursesConnectionGql=(e=c.FragmentEnumType.CourseTypeFull)=>a.gql`
  query readCoursesConnection(
    $readCoursesConnectionInput: ReadCoursesConnectionInputType!
  ) {
    readCoursesConnection(
      readCoursesConnectionInput: $readCoursesConnectionInput
    ) {
      edges {
        cursor
        node {
          ...${e}
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${l[e]}
`},7924:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readCoursesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readCoursesGql=(e=c.FragmentEnumType.CourseTypeFull)=>a.gql`
  query readCourses($readCoursesInput: [ReadCourseInputType!]!) {
    readCourses(readCoursesInput: $readCoursesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},6468:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readDocumentsConnectionGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readDocumentsConnectionGql=(e=c.FragmentEnumType.DocumentTypeFull)=>a.gql`
  query readDocumentsConnection(
    $readDocumentsConnectionInput: ReadDocumentsConnectionInputType!
  ) {
    readDocumentsConnection(
      readDocumentsConnectionInput: $readDocumentsConnectionInput
    ) {
      edges {
        cursor
        node {
          ...${e}
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${l[e]}
`},8936:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readDocumentsGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readDocumentsGql=(e=c.FragmentEnumType.DocumentTypeFull)=>a.gql`
  query readDocuments($readDocumentsIdsInput: [String!]!) {
    readDocuments(readDocumentsIdsInput: $readDocumentsIdsInput) {
      ...${e}
    }
  }
  ${l[e]}
`},9193:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readModulesConnectionGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readModulesConnectionGql=(e=c.FragmentEnumType.ModuleTypeFull)=>a.gql`
  query readModulesConnection(
    $readModulesConnectionInput: ReadModulesConnectionInputType!
  ) {
    readModulesConnection(
      readModulesConnectionInput: $readModulesConnectionInput
    ) {
      edges {
        cursor
        node {
          ...${e}
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${l[e]}
`},8685:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readModulesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readModulesGql=(e=c.FragmentEnumType.ModuleTypeFull)=>a.gql`
  query readModules($readModulesInput: [ReadModuleInputType!]!) {
    readModules(readModulesInput: $readModulesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},1477:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readProfilesAllGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readProfilesAllGql=(e=c.FragmentEnumType.ProfileTypeFull)=>a.gql`
  query readProfilesAll {
    readProfilesAll {
      ...${e}
    }
  }
  ${l[e]}
`},7894:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readProfilesConnectionGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readProfilesConnectionGql=(e=c.FragmentEnumType.ProfileTypeFull)=>a.gql`
  query readProfilesConnection(
    $readProfilesConnectionInput: ReadProfilesConnectionInputType!
  ) {
    readProfilesConnection(
      readProfilesConnectionInput: $readProfilesConnectionInput
    ) {
      edges {
        cursor
        node {
          ...${e}
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${l[e]}
`},7382:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.readProfilesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.readProfilesGql=(e=c.FragmentEnumType.ProfileTypeFull)=>a.gql`
  query readProfiles($readProfilesInput: [ReadProfileInputType!]!) {
    readProfiles(readProfilesInput: $readProfilesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},7219:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.sendEmailDocumentGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.sendEmailDocumentGql=(e=c.FragmentEnumType.DocumentTypeFull)=>a.gql`
  query sendEmailDocument(
    $documentID: String!
    $sendTo: String!
    $sendCc: String!
    $sendBcc: String!
  ) {
    sendEmailDocument(
      documentID: $documentID
      sendTo: $sendTo
      sendCc: $sendCc
      sendBcc: $sendBcc
    ) {
      ...${e}
    }
  }
  ${l[e]}
`},2641:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.updateCoursesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.updateCoursesGql=(e=c.FragmentEnumType.CourseTypeFull)=>a.gql`
  mutation updateCourses($updateCoursesInput: [UpdateCourseInputType!]!) {
    updateCourses(updateCoursesInput: $updateCoursesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},2221:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.updateDocumentsGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.updateDocumentsGql=(e=c.FragmentEnumType.DocumentTypeFull)=>a.gql`
  mutation updateDocuments($updateDocumentsInput: [UpdateDocumentInputType!]!) {
    updateDocuments(updateDocumentsInput: $updateDocumentsInput) {
      ...${e}
    }
  }
  ${l[e]}
`},7240:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.updateModulesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.updateModulesGql=(e=c.FragmentEnumType.ModuleTypeFull)=>a.gql`
  mutation updateModules($updateModulesInput: [UpdateModuleInputType!]!) {
    updateModules(updateModulesInput: $updateModulesInput) {
      ...${e}
    }
  }
  ${l[e]}
`},4545:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.updateProfilesGql=void 0;const a=n(3234),s=i(n(253)),c=n(3386),l=s;t.updateProfilesGql=(e=c.FragmentEnumType.ProfileTypeFull)=>a.gql`
  mutation updateProfiles($updateProfilesInput: [UpdateProfileInputType!]!) {
    updateProfiles(updateProfilesInput: $updateProfilesInput) {
      ...${e}
    }
  }
  ${l[e]}