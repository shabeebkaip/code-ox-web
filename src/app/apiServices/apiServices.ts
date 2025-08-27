import axiosInstance from '../../../instance/axios';




export const getHomePageData = async () => {
  try {
    const response = await axiosInstance.get('/home/list');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    throw new Error('Unable to fetch home page data');
  }
};


export const getCaseStudy = async (caseStudy: string) => {
  try {
    const response = await axiosInstance.get(`/caseStudy/webList/${caseStudy}`);
    return response.data.data
  } catch (error) {
    console.error('Failed to fetch case studies:', error);
    throw new Error('Unable to fetch case studies');
  }
};

export interface Blog {
  id: string;
  title: string;
  name: string;
  content: string;
  image: {
    fileUrl: string;
    id: string;
  };
  createdAt?: string;
  profileImage: {
    fileUrl: string;
    id: string;
  };
}
export interface RecentBlog {
  _id: string;
  title: string;
  name: string;
  content: string;
  image: {
    fileUrl: string;
    id: string;
  };
  createdAt?: string;
  profileImage: {
    fileUrl: string;
    id: string;
  };
}

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axiosInstance.get('/blog/weblist');
    return response.data.blog;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw new Error('Unable to fetch blogs');
  }
};

export const getBlogById = async (id: string): Promise<Blog> => {
  try {
    const response = await axiosInstance.get(`/blog/weblist/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch blog:', error);
    throw new Error('Unable to fetch blog');
  }
};

export const getRecentPost = async (id: string): Promise<RecentBlog[]> => {
  try {
    const response = await axiosInstance.post(`/blog/recent-posts/${id}`);
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('Failed to fetch recent blog:', error);
    throw new Error('Unable to fetch blog');
  }
};

export const getOurTeam = async () => {
  try {
    const response = await axiosInstance.get('/ourTeam/webList');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch our service content:', error);
    throw new Error('Unable to fetch our service content');
  }
};

export const getFooterData = async () => {
  try {
    const response = await axiosInstance.get('/footer/list');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch Footer data:', error);
    throw new Error('Unable to fetch home page data');
  }
};

export const getAboutUsPageData = async () => {
  try {
    const response = await axiosInstance.get('/aboutUs/list');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch our service content:', error);
    throw new Error('Unable to fetch our service content');
  }
};

export interface EnquiryData {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
  phone?: string;
}


export const createEnquiry = async (data: EnquiryData) => {
  try {
    const response = await axiosInstance.post(`/enquiry/create`, data);
    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error instanceof Error ? error.message : String(error)}`);
  }
};



export const getOdooPageData = async () => {
  try {
    const response = await axiosInstance.get('/odoo-erp/list');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    throw new Error('Unable to fetch home page data');
  }
};

export const getNutriProPageData = async () => {
  try {
    const response = await axiosInstance.get('/nutri-pro/list');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch nutri data:', error);
    throw new Error('Unable to fetch nutri data');
  }
};




export const getOurServiceDetailPage = async (id:string) => {
  try {
    const response = await axiosInstance.get(`/footer/list/services/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    throw new Error('Unable to fetch home page data');
  }
};

export const getOurProductDetailPage = async (id:string) => {
  try {
    const response = await axiosInstance.get(`/home/list/ourProducts/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    throw new Error('Unable to fetch home page data');
  }
};

export const getDietPro = async (dietPro: string) => {
  try {
    const response = await axiosInstance.get(`/diet-pro/webList/${dietPro}`);
    return response.data.data
  } catch (error) {
    console.error('Failed to fetch diet pro:', error);
    throw new Error('Unable to fetch cdiet pro');
  }
};