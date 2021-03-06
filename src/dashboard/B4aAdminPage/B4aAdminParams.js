const ADMIN_ROLE = 'B4aAdminUser'
const MENU_ITEM_CLASS = 'B4aMenuItem'
const CUSTOM_FIELD_CLASS = 'B4aCustomField'
const SETTING_CLASS = 'B4aSetting'

const B4aAdminParams = ({appName}) => ({
  classes: [
    {
      name: SETTING_CLASS,
      rows: [
        {key: 'appName', value: appName},
      ],
    },
    {
      name: MENU_ITEM_CLASS,
      rows: [
        {
          title: 'Menu Item',
          objectClassName: MENU_ITEM_CLASS,
          relevance: '-1000',
          isHidden: false,
          addFormTitle: '',
          editFormTitle: '',
          isReadOnly: false
        },
        {
          title: 'Custom Field',
          objectClassName: CUSTOM_FIELD_CLASS,
          relevance: '-2000',
          isHidden: false,
          addFormTitle: '',
          editFormTitle: '',
          isReadOnly: false
        },
        {
          title: 'Setting',
          objectClassName: SETTING_CLASS,
          relevance: '-3000',
          isHidden: false,
          addFormTitle: '',
          editFormTitle: '',
          isReadOnly: false
        },
      ],
    },
    {
      name: CUSTOM_FIELD_CLASS,
      rows: [
        {
          objectClassName: '_User',
          objectClassFieldName: 'username',
          title: 'Username',
          isRequired: false,
          isTableHidden: false,
          relevance: -1000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: '_User',
          objectClassFieldName: 'password',
          title: 'Password',
          subType: 'PASSWORD',
          isRequired: false,
          isTableHidden: true,
          relevance: -2000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: '_User',
          objectClassFieldName: 'email',
          title: 'Email',
          isRequired: false,
          isTableHidden: false,
          relevance: -3000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: '_User',
          objectClassFieldName: 'emailVerified',
          title: 'Is Email Verified',
          isRequired: false,
          isTableHidden: false,
          relevance: -4000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: '_User',
          objectClassFieldName: 'authData',
          title: 'Auth Data',
          isRequired: false,
          isTableHidden: false,
          relevance: -5000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'title',
          title: 'Title',
          isRequired: true,
          isTableHidden: false,
          relevance: -1000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'objectClassName',
          title: 'Class',
          isRequired: true,
          subType: 'SELECT',
          options: 'objectClasses.map(objectClass => objectClass.name).sort()',
          isTableHidden: false,
          relevance: -2000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'relevance',
          title: 'Relevance',
          isRequired: true,
          defaultValue: '0',
          isTableHidden: false,
          relevance: -3000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'isHidden',
          title: 'Is Hidden?',
          isRequired: false,
          defaultValue: 'false',
          isTableHidden: false,
          relevance: -4000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'addFormTitle',
          title: 'Add Form Title',
          isRequired: false,
          isTableHidden: false,
          relevance: -5000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'editFormTitle',
          title: 'Edit Form Title',
          isRequired: false,
          isTableHidden: false,
          relevance: -6000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aMenuItem',
          objectClassFieldName: 'isReadOnly',
          title: 'Is Read Only?',
          isRequired: false,
          defaultValue: 'false',
          isTableHidden: false,
          relevance: -7000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'objectClassName',
          title: 'Class',
          subType: 'SELECT',
          isRequired: true,
          options: 'objectClasses.map(objectClass => objectClass.name).sort()',
          isTableHidden: false,
          relevance: -1000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'objectClassFieldName',
          title: 'Field',
          subType: 'SELECT',
          isRequired: true,
          options: '(objectClasses.find(objectClass => objectClass.name === objectEntity.objectClassName) || { fields: [] }).fields.map(objectClassField => objectClassField.name).sort()',
          isTableHidden: false,
          relevance: -2000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'title',
          title: 'Title',
          isRequired: true,
          isTableHidden: false,
          relevance: -3000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'subType',
          title: 'Sub Type',
          subType: 'SELECT',
          options: '((objectClasses.find(objectClass => objectClass.name === objectEntity.objectClassName) || { fields: [] }).fields.find(objectClassField => objectClassField.name === objectEntity.objectClassFieldName) || { type: \'\' }).type === \'STRING\' ? [\'PASSWORD\', \'SELECT\'] : []',
          isRequired: false,
          isTableHidden: false,
          isFormHidden: "((objectClasses.find(objectClass => objectClass.name === objectEntity.objectClassName) || { fields: [] }).fields.find(objectClassField => objectClassField.name === objectEntity.objectClassFieldName) || { type: '' }).type !== 'STRING'",
          relevance: -4000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'isRequired',
          title: 'Is Required',
          isRequired: true,
          defaultValue: 'false',
          isTableHidden: false,
          relevance: -8000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'options',
          title: 'Options (JS)',
          isRequired: false,
          defaultValue: '["Option A", "Option B"]',
          isTableHidden: true,
          isFormHidden: 'objectEntity.subType !== \'SELECT\'',
          relevance: -5000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'isTableHidden',
          title: 'Is Table Hidden',
          isRequired: true,
          options: '',
          defaultValue: 'false',
          isTableHidden: false,
          relevance: -6000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'isFormHidden',
          title: 'Is Form Hidden (JS)',
          isRequired: false,
          options: '',
          isTableHidden: false,
          relevance: -7000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'defaultValue',
          title: 'Default Value',
          isRequired: false,
          options: '',
          isTableHidden: false,
          relevance: -9000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'relevance',
          title: 'Relevance',
          isRequired: true,
          options: '',
          defaultValue: '0',
          isTableHidden: false,
          relevance: -10000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'referencesLinkText',
          title: 'References Link Text',
          isRequired: false,
          options: '',
          isTableHidden: false,
          relevance: -11000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'referencesLinkTitle',
          title: 'References Link Title',
          isRequired: false,
          options: '',
          isTableHidden: false,
          relevance: -12000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'inputMask',
          title: 'Input Mask',
          isRequired: false,
          options: '',
          isTableHidden: false,
          isFormHidden: "((objectClasses.find(objectClass => objectClass.name === objectEntity.objectClassName) || { fields: [] }).fields.find(objectClassField => objectClassField.name === objectEntity.objectClassFieldName) || { type: '' }).type !== 'DATE'",
          relevance: -13000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'cssClassName',
          title: 'CSS Class Name',
          isRequired: false,
          options: '',
          isTableHidden: false,
          relevance: -14000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aCustomField',
          objectClassFieldName: 'referenceTitleField',
          title: 'References Title Field',
          isRequired: false,
          options: '',
          isTableHidden: false,
          relevance: -15000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: '',
          cssClassName: '',
          referenceTitleField: ''
        },
        {
          objectClassName: 'B4aSetting',
          objectClassFieldName: 'key',
          title: 'Key',
          subType: 'SELECT',
          isRequired: true,
          options: '["appName", "brandColor", "logo", "isHomeHidden", "isFeedbackHidden", "isSupportButtonHidden"]',
          isTableHidden: false,
          relevance: -1000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: ''
        },
        {
          objectClassName: 'B4aSetting',
          objectClassFieldName: 'value',
          title: 'Value',
          isRequired: true,
          options: '["Option A", "Option B"]',
          isTableHidden: false,
          relevance: -2000,
          referencesLinkText: '',
          referencesLinkTitle: '',
          inputMask: ''
        },
      ],
    },
  ],
  adminRole: ADMIN_ROLE,
  customCLP: {
    [SETTING_CLASS]: {
      find: {
        '*': true,
      },
      get: {},
      create: {},
      update: {},
      delete: {},
      addField: {},
    }
  },
  defaultCLP: {
    find: {
      [`role:${ADMIN_ROLE}`]: true,
    },
    get: {},
    create: {},
    update: {},
    delete: {},
    addField: {},
  },
})

export default B4aAdminParams
