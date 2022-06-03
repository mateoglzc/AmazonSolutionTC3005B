/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      videoId
      agentId
      path
      startTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      videoId
      agentId
      path
      startTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      videoId
      agentId
      path
      startTime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent {
    onCreateAgent {
      agentId
      folder
      asgnRec {
        items {
          videoId
          agentId
          expirationDate
          assignId
          createdAt
          updatedAt
          agentAsgnRecId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent {
    onUpdateAgent {
      agentId
      folder
      asgnRec {
        items {
          videoId
          agentId
          expirationDate
          assignId
          createdAt
          updatedAt
          agentAsgnRecId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent {
    onDeleteAgent {
      agentId
      folder
      asgnRec {
        items {
          videoId
          agentId
          expirationDate
          assignId
          createdAt
          updatedAt
          agentAsgnRecId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAssignedRecordings = /* GraphQL */ `
  subscription OnCreateAssignedRecordings {
    onCreateAssignedRecordings {
      videoId
      agentId
      expirationDate
      assignId
      createdAt
      updatedAt
      agentAsgnRecId
    }
  }
`;
export const onUpdateAssignedRecordings = /* GraphQL */ `
  subscription OnUpdateAssignedRecordings {
    onUpdateAssignedRecordings {
      videoId
      agentId
      expirationDate
      assignId
      createdAt
      updatedAt
      agentAsgnRecId
    }
  }
`;
export const onDeleteAssignedRecordings = /* GraphQL */ `
  subscription OnDeleteAssignedRecordings {
    onDeleteAssignedRecordings {
      videoId
      agentId
      expirationDate
      assignId
      createdAt
      updatedAt
      agentAsgnRecId
    }
  }
`;
export const onCreateVoice = /* GraphQL */ `
  subscription OnCreateVoice {
    onCreateVoice {
      voiceId
      agentId
      path
      startTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVoice = /* GraphQL */ `
  subscription OnUpdateVoice {
    onUpdateVoice {
      voiceId
      agentId
      path
      startTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVoice = /* GraphQL */ `
  subscription OnDeleteVoice {
    onDeleteVoice {
      voiceId
      agentId
      path
      startTime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecording = /* GraphQL */ `
  subscription OnCreateRecording {
    onCreateRecording {
      recordingId
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecording = /* GraphQL */ `
  subscription OnUpdateRecording {
    onUpdateRecording {
      recordingId
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecording = /* GraphQL */ `
  subscription OnDeleteRecording {
    onDeleteRecording {
      recordingId
      path
      title
      duration
      createdAt
      updatedAt
    }
  }
`;
