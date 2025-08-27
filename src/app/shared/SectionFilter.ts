interface SectionItem {
    section: string;
    content: any;
  }
  
  export const findSections = (sectionName: string, data: SectionItem[] | undefined) => {
    return data?.find(item => item?.section === sectionName)?.content;
  };
  