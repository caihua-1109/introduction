type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "金彩华的个人网站",
    fullName: "金彩华",
    email: "3221894320@qq.com",
  },
  hero: {
    name: "金彩华",
    p: ["我开发 3D 视觉效果、用户", "界面和 Web 应用程序"],
  },
  contact: {
    p: "联系我们",
    h2: "接触",
    form: {
      name: {
        span: "你的名字",
        placeholder: "你叫什么名字?",
      },
      email: { span: "你的邮箱", placeholder: "你的邮箱是什么?" },
      message: {
        span: "你的留言",
        placeholder: "你想说什么?",
      },
    },
  },
  sections: {
    about: {
      p: "介绍",
      h2: "概述：",
      content: `我是一名熟练的软件开发人员，拥有 TypeScript 和 JavaScript 方面的经验，并且掌握 React、Node.js 和 Three.js 等框架。我学习能力强，与客户密切合作，创建高效、可扩展且用户友好的解决方案来解决实际问题。让我们一起努力，将您的想法变成现实！`,
    },
    experience: {
      p: "我目前所做的",
      h2: "工作经历",
    },
    feedbacks: {
      p: "其他人怎么说",
      h2: "感言",
    },
    works: {
      p: "我的工作",
      h2: "项目",
      content: `以下项目通过我工作的真实案例展示了我的技能和经验。每个项目都简要描述，并附有代码存储库和现场演示的链接。它反映了我解决复杂问题、使用不同技术以及有效管理项目的能力。`,
    },
  },
};
