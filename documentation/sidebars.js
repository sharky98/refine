/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    mainSidebar: [
        // Getting Started
        {
            type: "category",
            label: "Getting Started",
            className: "category-as-header",
            items: [
                "getting-started/overview",
                "getting-started/quickstart",
                {
                    type: "doc",
                    id: "tutorial/introduction/index",
                    label: "Tutorial",
                },
                {
                    type: "category",
                    label: "Examples",
                    link: {
                        type: "doc",
                        id: "examples/index",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Build Systems",
                            items: [
                                "examples/build-systems/turbo",
                                "examples/build-systems/lerna",
                                "examples/build-systems/nx",
                            ],
                        },
                        "examples/command-palette",
                        {
                            type: "category",
                            label: "Core",
                            items: [
                                "examples/core/useImport",
                                "examples/core/useMenu",
                                "examples/core/useModal",
                                "examples/core/useSelect",
                                "examples/core/useInfiniteList",
                            ],
                        },
                        {
                            type: "category",
                            label: "Customization",
                            items: [
                                "examples/customization/customFooter",
                                "examples/customization/customLogin",
                                "examples/customization/customSider",
                                "examples/customization/offLayoutArea",
                                "examples/customization/rtl",
                                "examples/customization/topMenuLayout",
                            ],
                        },
                        "examples/customPages",
                        {
                            type: "category",
                            label: "Field",
                            items: [
                                "examples/field/useCheckboxGroup",
                                "examples/field/useRadioGroup",
                                "examples/field/useSelect",
                                "examples/field/useSelect-with-infinite-list",
                                "examples/field/useAutocomplete",
                            ],
                        },
                        {
                            type: "category",
                            label: "Form",
                            items: [
                                {
                                    type: "category",
                                    label: "Headless",
                                    items: [
                                        "examples/form/headless/save-and-continue",
                                        "examples/form/headless/useForm",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Inputs",
                            items: [
                                "examples/inputs/customInput",
                                "examples/inputs/datePicker",
                            ],
                        },
                        "examples/javascript",
                        {
                            type: "category",
                            label: "List",
                            items: ["examples/list/useSimpleList"],
                        },
                        "examples/module-federation/vite",
                        "examples/multi-level-menu/multi-level-menu",
                        "examples/mutation-mode",
                        "examples/persistQuery",
                        {
                            type: "category",
                            label: "Search",
                            items: ["examples/search/search"],
                        },
                        {
                            type: "category",
                            label: "Table",
                            items: [
                                {
                                    type: "category",
                                    label: "Handson Table",
                                    items: [
                                        "examples/table/handsontable/handsontable",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "UI",
                            items: ["examples/ui/useModal"],
                        },
                        {
                            type: "category",
                            label: "Tutorial",
                            items: [
                                "examples/tutorial/antd-tutorial",
                                "examples/tutorial/headless-tutorial",
                                "examples/tutorial/mantine-tutorial",
                                "examples/tutorial/mui-tutorial",
                            ],
                        },

                        {
                            type: "category",
                            label: "Web3",
                            items: ["examples/web3/web3Login"],
                        },
                    ],
                },
            ],
        },
        // Devtools
        {
            type: "link",
            href: "https://s.refine.dev/devtools-beta",
            label: "Refine Devtools",
            className: "sidebar-item-shiny mt-6 -ml-2",
        },
        // Guides & Concepts
        {
            type: "category",
            label: "Guides & Concepts",
            className: "category-as-header",
            items: [
                "guides-concepts/general-concepts/index",
                "guides-concepts/data-fetching/index",
                "guides-concepts/forms/index",
                "guides-concepts/tables/index",
                "guides-concepts/routing/index",
                "guides-concepts/authentication/index",
                "guides-concepts/authorization/index",
                "guides-concepts/ui-libraries/index",
                "guides-concepts/realtime/index",
                "guides-concepts/audit-logs/index",
                {
                    type: "category",
                    label: "Advanced Tutorials",
                    link: {
                        type: "generated-index",
                        title: "Advanced Tutorials",
                        slug: "/advanced-tutorials",
                    },
                    items: [
                        "advanced-tutorials/access-control",
                        {
                            type: "category",
                            label: "Auth",
                            items: [
                                "advanced-tutorials/auth/auth0",
                                "advanced-tutorials/auth/azure-ad",
                            ],
                        },
                        "advanced-tutorials/custom-layout",
                        {
                            type: "category",
                            label: "Data Provider",
                            items: [
                                "advanced-tutorials/data-provider/handling-filters",
                            ],
                        },
                        {
                            type: "category",
                            label: "Form",
                            items: [
                                "advanced-tutorials/forms/custom-form-validation",
                            ],
                        },
                        {
                            type: "category",
                            label: "Import - Export",
                            items: [
                                "advanced-tutorials/import-export/csv-export",
                                "advanced-tutorials/import-export/csv-import",
                            ],
                        },
                        "advanced-tutorials/real-time",
                        "advanced-tutorials/multi-level-menu/multi-level-menu",
                        {
                            type: "category",
                            label: "Multitenancy",
                            items: [
                                "advanced-tutorials/multi-tenancy/appwrite",
                                "advanced-tutorials/multi-tenancy/strapi-v4",
                            ],
                        },
                        "advanced-tutorials/mutation-mode",
                        {
                            type: "category",
                            label: "Search",
                            items: [
                                "advanced-tutorials/search/list-search",
                                "advanced-tutorials/search/search",
                                "advanced-tutorials/search/table-search",
                            ],
                        },
                        {
                            type: "category",
                            label: "Upload",
                            items: [
                                "advanced-tutorials/upload/base64-upload",
                                "advanced-tutorials/upload/multipart-upload",
                            ],
                        },
                        {
                            type: "category",
                            label: "Web3",
                            items: ["advanced-tutorials/web3/ethereum-signin"],
                        },
                    ],
                },
                "guides-concepts/development/index",
                "guides-concepts/contributing/index",
                "guides-concepts/faq/index",
            ],
        },
        // Core API
        {
            type: "category",
            label: "Core",
            className: "category-as-header",
            items: [
                {
                    type: "doc",
                    id: "core/refine-component/index",
                    label: "<Refine>",
                },
                "core/interface-references/index",
            ],
        },
        // Data
        {
            type: "category",
            label: "Data",
            className: "category-as-header",
            items: [
                "data/data-provider",
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: [
                        "data/hooks/use-api-url/index",
                        "data/hooks/use-create/index",
                        "data/hooks/use-create-many/index",
                        "data/hooks/use-custom/index",
                        "data/hooks/use-custom-mutation/index",
                        "data/hooks/use-data-provider/index",
                        "data/hooks/use-delete/index",
                        "data/hooks/use-delete-many/index",
                        "data/hooks/use-form/index",
                        "data/hooks/use-infinite-list/index",
                        "data/hooks/use-invalidate/index",
                        "data/hooks/use-list/index",
                        "data/hooks/use-many/index",
                        "data/hooks/use-one/index",
                        "data/hooks/use-select/index",
                        "data/hooks/use-show/index",
                        "data/hooks/use-table/index",
                        "data/hooks/use-update/index",
                        "data/hooks/use-update-many/index",
                    ],
                },
                {
                    type: "category",
                    label: "Packages",
                    items: [
                        "data/packages/airtable/index",
                        "data/packages/appwrite/index",
                        "data/packages/graphql/index",
                        "data/packages/simple-rest/index",
                        "data/packages/strapi-v4/index",
                        "data/packages/strapi-graphql/index",
                        "data/packages/supabase/index",
                        "data/packages/nestjs-query/index",
                        "data/packages/nestjsx-crud/index",
                        "data/packages/hasura/index",
                        "data/packages/community-data-providers/index",
                    ],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        "data/examples/airtable",
                        "data/examples/appwrite",
                        "data/examples/directus",
                        "data/examples/elide",
                        "data/examples/hasura",
                        "data/examples/multiple",
                        "data/examples/nestjsxCrud",
                        "data/examples/nestjs-query",
                        "data/examples/nhost",
                        "data/examples/strapi",
                        "data/examples/strapi-graphql",
                        "data/examples/strapi-v4",
                        "data/examples/supabase",
                        "data/examples/sanity",
                    ],
                },
            ],
        },
        // Router
        {
            type: "category",
            label: "Routing",
            className: "category-as-header",
            items: [
                "routing/router-provider",
                {
                    type: "category",
                    collapsible: false,
                    label: "Integrations",
                    items: [
                        "routing/integrations/react-router/index",
                        "routing/integrations/next-js/index",
                        "routing/integrations/remix/index",
                    ],
                },
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: [
                        "routing/hooks/use-resource/index",
                        "routing/hooks/use-go/index",
                        "routing/hooks/use-back/index",
                        "routing/hooks/use-parsed/index",
                        "routing/hooks/use-link/index",
                        "routing/hooks/use-get-to-path/index",
                        "routing/hooks/use-navigation/index",
                    ],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        { type: "html", value: "Next.js" },
                        "examples/next-js/nextjs",
                        "examples/next-js/nextjs-appdir",
                        "examples/next-js/auth",
                        "examples/next-js/NextAuth-js",
                        { type: "html", value: "Remix" },
                        "examples/remix/remix-headless",
                        "examples/remix/remix-auth",
                    ],
                },
            ],
        },
        // Authentication
        {
            type: "category",
            label: "Authentication",
            className: "category-as-header",
            items: [
                "core/providers/auth-provider/index",
                {
                    type: "category",
                    collapsible: false,
                    label: "Components",
                    items: [
                        "core/components/authenticated/index",
                        "core/components/auth-page/index",
                    ],
                },
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: [
                        "core/hooks/auth/use-is-authenticated/index",
                        "core/hooks/auth/use-on-error/index",
                        "core/hooks/auth/use-get-identity/index",
                        "core/hooks/auth/use-login/index",
                        "core/hooks/auth/use-logout/index",
                        "core/hooks/auth/use-permissions/index",
                        "core/hooks/auth/use-register/index",
                        "core/hooks/auth/use-forgot-password/index",
                        "core/hooks/auth/use-update-password/index",
                    ],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        "examples/authentication/headless",
                        "examples/auth-provider/auth0",
                        "examples/auth-provider/google-auth",
                        "examples/auth-provider/keycloak",
                        "examples/auth-provider/kinde",
                        "examples/auth-provider/otpLogin",
                    ],
                },
            ],
        },
        // Authorization
        {
            type: "category",
            label: "Authorization",
            className: "category-as-header",
            items: [
                "core/providers/access-control-provider/index",
                {
                    type: "category",
                    collapsible: false,
                    label: "Components",
                    items: ["core/components/can-access/index"],
                },
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: ["core/hooks/use-can/index"],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        "examples/access-control/casbin",
                        "examples/access-control/cerbos",
                    ],
                },
            ],
        },
        // Realtime
        {
            type: "category",
            label: "Realtime",
            className: "category-as-header",
            items: [
                "core/providers/live-provider/index",
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: [
                        "core/hooks/realtime/use-publish/index",
                        "core/hooks/realtime/use-subscription/index",
                    ],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: ["examples/live-provider/ably"],
                },
            ],
        },
        // Notification
        {
            type: "category",
            label: "Notification",
            className: "category-as-header",
            items: [
                "core/providers/notification-provider/index",
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: ["core/hooks/utilities/use-notification/index"],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: ["examples/notification-provider/react-toastify"],
                },
            ],
        },
        // i18n
        {
            type: "category",
            label: "I18n",
            className: "category-as-header",
            items: [
                "core/providers/i18n-provider/index",
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: [
                        "core/hooks/translate/use-get-locale/index",
                        "core/hooks/translate/use-set-locale/index",
                        "core/hooks/translate/use-translate/index",
                    ],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        "examples/i18n/i18n-nextjs",
                        "examples/i18n/i18n-react",
                    ],
                },
            ],
        },
        // Audit Logs
        {
            type: "category",
            label: "Audit Logs",
            className: "category-as-header",
            items: [
                "core/providers/audit-log-provider/index",
                {
                    type: "category",
                    collapsible: false,
                    label: "Hooks",
                    items: [
                        "core/hooks/audit-log/use-log/index",
                        "core/hooks/audit-log/use-log-list/index",
                    ],
                },
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        "examples/audit-log/audit-log-antd",
                        "examples/audit-log/audit-log-provider",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Core Utilities",
            className: "category-as-header",
            items: [
                {
                    type: "category",
                    label: "Components",
                    collapsible: false,
                    items: [
                        // TODO: add doc
                        // "core/components/auto-save-indicator/index",
                        "core/components/inferencer/index",
                    ],
                },
                {
                    type: "category",
                    label: "Hooks",
                    collapsible: false,
                    items: [
                        "core/hooks/utilities/use-modal/index",
                        "core/hooks/utilities/use-menu/index",
                        "core/hooks/utilities/use-breadcrumb/index",
                        "core/hooks/utilities/use-import/index",
                        "core/hooks/utilities/use-export/index",
                    ],
                },
            ],
        },
        // UI Integrations
        {
            type: "category",
            label: "UI Integrations",
            className: "category-as-header",
            items: [
                // Ant Design
                {
                    type: "category",
                    label: "Ant Design",
                    collapsible: false,
                    // className: "category-as-header",
                    items: [
                        "ui-integrations/ant-design/introduction/index",
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "ui-integrations/ant-design/components/themed-layout/index",
                                "ui-integrations/ant-design/components/auth-page/index",
                                "ui-integrations/ant-design/components/breadcrumb/index",
                                "ui-integrations/ant-design/components/filter-dropdown/index",
                                "ui-integrations/ant-design/components/auto-save-indicator/index",
                                "ui-integrations/ant-design/components/inferencer/index",
                                // "ui-integrations/ant-design/components/custom-inputs/index", // This should be included in the guide
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "ui-integrations/ant-design/components/basic-views/create/index",
                                        "ui-integrations/ant-design/components/basic-views/edit/index",
                                        "ui-integrations/ant-design/components/basic-views/list/index",
                                        "ui-integrations/ant-design/components/basic-views/show/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "ui-integrations/ant-design/components/buttons/clone-button/index",
                                        "ui-integrations/ant-design/components/buttons/create-button/index",
                                        "ui-integrations/ant-design/components/buttons/delete-button/index",
                                        "ui-integrations/ant-design/components/buttons/edit-button/index",
                                        "ui-integrations/ant-design/components/buttons/export-button/index",
                                        "ui-integrations/ant-design/components/buttons/import-button/index",
                                        "ui-integrations/ant-design/components/buttons/list-button/index",
                                        "ui-integrations/ant-design/components/buttons/refresh-button/index",
                                        "ui-integrations/ant-design/components/buttons/save-button/index",
                                        "ui-integrations/ant-design/components/buttons/show-button/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "ui-integrations/ant-design/components/fields/boolean-field/index",
                                        "ui-integrations/ant-design/components/fields/date-field/index",
                                        "ui-integrations/ant-design/components/fields/email-field/index",
                                        "ui-integrations/ant-design/components/fields/file-field/index",
                                        "ui-integrations/ant-design/components/fields/image-field/index",
                                        "ui-integrations/ant-design/components/fields/markdown-field/index",
                                        "ui-integrations/ant-design/components/fields/number-field/index",
                                        "ui-integrations/ant-design/components/fields/tag-field/index",
                                        "ui-integrations/ant-design/components/fields/text-field/index",
                                        "ui-integrations/ant-design/components/fields/url-field/index",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                "ui-integrations/ant-design/hooks/use-table/index",
                                "ui-integrations/ant-design/hooks/use-editable-table/index",
                                "ui-integrations/ant-design/hooks/use-simple-list/index",
                                "ui-integrations/ant-design/hooks/use-form/index",
                                "ui-integrations/ant-design/hooks/use-drawer-form/index",
                                "ui-integrations/ant-design/hooks/use-modal-form/index",
                                "ui-integrations/ant-design/hooks/use-steps-form/index",
                                "ui-integrations/ant-design/hooks/use-select/index",
                                "ui-integrations/ant-design/hooks/use-checkbox-group/index",
                                "ui-integrations/ant-design/hooks/use-radio-group/index",
                                "ui-integrations/ant-design/hooks/use-import/index",
                                "ui-integrations/ant-design/hooks/use-modal/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Examples",
                            items: [
                                "examples/remix/remix-antd",
                                "examples/customization/theme/customThemeAntd",
                                "examples/authentication/antd",
                                "examples/themes/refine-themes-antd",
                                "examples/form/antd/custom-form-validation",
                                "examples/form/antd/useDrawerForm",
                                "examples/form/antd/useForm",
                                "examples/form/antd/useModalForm",
                                "examples/form/antd/useStepsForm",
                                "examples/form/antd/serverSideFormValidation",
                                "examples/upload/antd/base64",
                                "examples/upload/antd/multipart",
                                "examples/table/antd/advancedTable",
                                "examples/table/antd/tableFilter",
                                "examples/table/antd/useDeleteMany",
                                "examples/table/antd/useEditableTable",
                                "examples/table/antd/useTable",
                                "examples/table/antd/useUpdateMany",
                                "examples/import-export/antd",
                                "examples/storybook/antd-storybook",
                            ],
                        },
                        "ui-integrations/ant-design/theming/index",
                        "ui-integrations/ant-design/migration-guide/index",
                    ],
                },
                // Material UI
                {
                    type: "category",
                    label: "Material UI",
                    collapsible: false,
                    // className: "category-as-header",
                    items: [
                        "ui-integrations/material-ui/introduction/index",
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "ui-integrations/material-ui/components/themed-layout/index",
                                "ui-integrations/material-ui/components/auth-page/index",
                                "ui-integrations/material-ui/components/breadcrumb/index",
                                "ui-integrations/material-ui/components/auto-save-indicator/index",
                                "ui-integrations/material-ui/components/inferencer/index",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "ui-integrations/material-ui/components/basic-views/create/index",
                                        "ui-integrations/material-ui/components/basic-views/edit/index",
                                        "ui-integrations/material-ui/components/basic-views/list/index",
                                        "ui-integrations/material-ui/components/basic-views/show/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "ui-integrations/material-ui/components/buttons/clone-button/index",
                                        "ui-integrations/material-ui/components/buttons/create-button/index",
                                        "ui-integrations/material-ui/components/buttons/delete-button/index",
                                        "ui-integrations/material-ui/components/buttons/edit-button/index",
                                        "ui-integrations/material-ui/components/buttons/export-button/index",
                                        "ui-integrations/material-ui/components/buttons/import-button/index",
                                        "ui-integrations/material-ui/components/buttons/list-button/index",
                                        "ui-integrations/material-ui/components/buttons/refresh-button/index",
                                        "ui-integrations/material-ui/components/buttons/save-button/index",
                                        "ui-integrations/material-ui/components/buttons/show-button/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "ui-integrations/material-ui/components/fields/boolean-field/index",
                                        "ui-integrations/material-ui/components/fields/date-field/index",
                                        "ui-integrations/material-ui/components/fields/email-field/index",
                                        "ui-integrations/material-ui/components/fields/file-field/index",
                                        "ui-integrations/material-ui/components/fields/markdown-field/index",
                                        "ui-integrations/material-ui/components/fields/number-field/index",
                                        "ui-integrations/material-ui/components/fields/tag-field/index",
                                        "ui-integrations/material-ui/components/fields/text-field/index",
                                        "ui-integrations/material-ui/components/fields/url-field/index",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                "ui-integrations/material-ui/hooks/use-auto-complete/index",
                                "ui-integrations/material-ui/hooks/use-data-grid/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Examples",
                            items: [
                                "examples/authentication/mui",
                                "examples/remix/remix-material-ui",
                                "examples/customization/theme/customThemeMaterialUI",
                                "examples/form/mui/useDrawerForm",
                                "examples/form/mui/useForm",
                                "examples/form/mui/useModalForm",
                                "examples/form/mui/useStepsForm",
                                "examples/form/mui/serverSideFormValidation",
                                "examples/import-export/material-ui",
                                "examples/storybook/material-ui-storybook",
                                "examples/table/mui/advanced",
                                "examples/table/mui/cursor-pagination",
                                "examples/table/mui/filter",
                                "examples/table/mui/useDataGrid",
                                "examples/table/mui/useDeleteMany",
                                "examples/table/mui/useUpdateMany",
                                "examples/themes/refine-themes-mui",
                                "examples/upload/mui/base64",
                                "examples/upload/mui/multipart",
                            ],
                        },
                        "ui-integrations/material-ui/theming/index",
                        "ui-integrations/material-ui/migration-guide/index",
                    ],
                },
                // Chakra UI
                {
                    type: "category",
                    label: "Chakra UI",
                    collapsible: false,
                    // className: "category-as-header",
                    items: [
                        "ui-integrations/chakra-ui/introduction/index",
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "ui-integrations/chakra-ui/components/themed-layout/index",
                                "ui-integrations/chakra-ui/components/auth-page/index",
                                "ui-integrations/chakra-ui/components/breadcrumb/index",
                                "ui-integrations/chakra-ui/components/auto-save-indicator/index",
                                "ui-integrations/chakra-ui/components/inferencer/index",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "ui-integrations/chakra-ui/components/basic-views/create/index",
                                        "ui-integrations/chakra-ui/components/basic-views/edit/index",
                                        "ui-integrations/chakra-ui/components/basic-views/list/index",
                                        "ui-integrations/chakra-ui/components/basic-views/show/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "ui-integrations/chakra-ui/components/buttons/clone-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/create-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/delete-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/edit-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/export-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/import-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/list-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/refresh-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/save-button/index",
                                        "ui-integrations/chakra-ui/components/buttons/show-button/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "ui-integrations/chakra-ui/components/fields/boolean-field/index",
                                        "ui-integrations/chakra-ui/components/fields/date-field/index",
                                        "ui-integrations/chakra-ui/components/fields/email-field/index",
                                        "ui-integrations/chakra-ui/components/fields/file-field/index",
                                        "ui-integrations/chakra-ui/components/fields/markdown-field/index",
                                        "ui-integrations/chakra-ui/components/fields/number-field/index",
                                        "ui-integrations/chakra-ui/components/fields/tag-field/index",
                                        "ui-integrations/chakra-ui/components/fields/text-field/index",
                                        "ui-integrations/chakra-ui/components/fields/url-field/index",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Examples",
                            items: [
                                "examples/themes/refine-themes-chakra-ui",
                                "examples/customization/theme/customThemeChakraUI",
                                "examples/form/chakra-ui/useDrawerForm",
                                "examples/form/chakra-ui/useForm",
                                "examples/form/chakra-ui/useModalForm",
                                "examples/form/chakra-ui/serverSideFormValidation",
                            ],
                        },
                        "ui-integrations/chakra-ui/theming/index",
                    ],
                },
                // Mantine
                {
                    type: "category",
                    label: "Mantine",
                    collapsible: false,
                    // className: "category-as-header",
                    items: [
                        "ui-integrations/mantine/introduction/index",
                        {
                            type: "category",
                            label: "Components",
                            items: [
                                "ui-integrations/mantine/components/themed-layout/index",
                                "ui-integrations/mantine/components/auth-page/index",
                                "ui-integrations/mantine/components/breadcrumb/index",
                                "ui-integrations/mantine/components/auto-save-indicator/index",
                                "ui-integrations/mantine/components/inferencer/index",
                                {
                                    type: "category",
                                    label: "Basic Views",
                                    items: [
                                        "ui-integrations/mantine/components/basic-views/create/index",
                                        "ui-integrations/mantine/components/basic-views/edit/index",
                                        "ui-integrations/mantine/components/basic-views/list/index",
                                        "ui-integrations/mantine/components/basic-views/show/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Buttons",
                                    items: [
                                        "ui-integrations/mantine/components/buttons/clone-button/index",
                                        "ui-integrations/mantine/components/buttons/create-button/index",
                                        "ui-integrations/mantine/components/buttons/delete-button/index",
                                        "ui-integrations/mantine/components/buttons/edit-button/index",
                                        "ui-integrations/mantine/components/buttons/export-button/index",
                                        "ui-integrations/mantine/components/buttons/import-button/index",
                                        "ui-integrations/mantine/components/buttons/list-button/index",
                                        "ui-integrations/mantine/components/buttons/refresh-button/index",
                                        "ui-integrations/mantine/components/buttons/save-button/index",
                                        "ui-integrations/mantine/components/buttons/show-button/index",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Fields",
                                    items: [
                                        "ui-integrations/mantine/components/fields/boolean-field/index",
                                        "ui-integrations/mantine/components/fields/date-field/index",
                                        "ui-integrations/mantine/components/fields/email-field/index",
                                        "ui-integrations/mantine/components/fields/file-field/index",
                                        "ui-integrations/mantine/components/fields/markdown-field/index",
                                        "ui-integrations/mantine/components/fields/number-field/index",
                                        "ui-integrations/mantine/components/fields/tag-field/index",
                                        "ui-integrations/mantine/components/fields/text-field/index",
                                        "ui-integrations/mantine/components/fields/url-field/index",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Hooks",
                            items: [
                                "ui-integrations/mantine/hooks/use-form/index",
                                "ui-integrations/mantine/hooks/use-drawer-form/index",
                                "ui-integrations/mantine/hooks/use-modal-form/index",
                                "ui-integrations/mantine/hooks/use-steps-form/index",
                                "ui-integrations/mantine/hooks/use-select/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Examples",
                            items: [
                                "examples/themes/refine-themes-mantine",
                                "examples/form/mantine/useDrawerForm",
                                "examples/form/mantine/useForm",
                                "examples/form/mantine/useModalForm",
                                "examples/form/mantine/useStepsForm",
                                "examples/form/mantine/serverSideFormValidation",
                                "examples/authentication/mantine",
                                "examples/customization/theme/customThemeMantine",
                                "examples/import-export/mantine",
                                "examples/table/mantine/advanced-react-table",
                                "examples/table/mantine/basic",
                                "examples/upload/mantine/base64",
                                "examples/upload/mantine/multipart",
                            ],
                        },
                        "ui-integrations/mantine/theming/index",
                    ],
                },
            ],
        },
        // Packages
        {
            type: "category",
            label: "Packages",
            className: "category-as-header",
            items: [
                "packages/list-of-packages/index",
                // React Table
                {
                    type: "category",
                    label: "React Table",
                    collapsible: false,
                    items: [
                        "packages/tanstack-table/introduction/index",
                        "packages/tanstack-table/use-table/index",
                        {
                            type: "category",
                            label: "Examples",
                            items: [
                                "examples/table/tanstack-table/basic-tanstack-table",
                                "examples/table/tanstack-table/advanced-tanstack-table",
                            ],
                        },
                    ],
                },
                // React Hook Form
                {
                    type: "category",
                    label: "React Hook Form",
                    collapsible: false,
                    items: [
                        "packages/react-hook-form/introduction/index",
                        "packages/react-hook-form/use-form/index",
                        "packages/react-hook-form/use-modal-form/index",
                        "packages/react-hook-form/use-steps-form/index",
                        {
                            type: "category",
                            label: "Examples",
                            items: [
                                "examples/form/react-hook-form/useForm",
                                "examples/form/react-hook-form/useModalForm",
                                "examples/form/react-hook-form/useStepsForm",
                            ],
                        },
                    ],
                },
                "packages/cli/index",
                // "packages/devtools/index",
                "packages/inferencer/index",
                "packages/command-palette/index",
            ],
        },
        // Enterprise Edition
        {
            type: "category",
            label: "Enterprise Edition",
            className: "category-as-header",
            items: ["enterprise-edition/okta/index"],
        },
        // Migration Guide
        {
            type: "category",
            label: "Migration Guide 🚀",
            className: "category-as-header",
            items: [
                "migration-guide/3x-to-4x",
                "migration-guide/auth-provider",
                "migration-guide/router-provider",
            ],
        },
        // Further Readings
        {
            type: "category",
            label: "Further Readings",
            className: "category-as-header",
            items: [
                "further-readings/testing",
                "further-readings/benchmarks",
                "further-readings/telemetry",
                "further-readings/comparison",
                "further-readings/license",
            ],
        },
    ],
};
