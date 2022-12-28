import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { GoogleOutlined } from '@ant-design/icons';

import MESSAGES from 'constants/messages';
import { ENDPOINTS } from 'constants/endpoints';
import { useRedirect } from 'hooks';
import { GlobalContext } from 'components/Common/Hoc/context';
import { initializePolis } from 'resources/js/polis.embed.js';

import {
  StyledPolIsVoteBoxWrapper,
  StyledPolIsVoteBox,
  StyledShadowOver,
  StyledButton,
} from './styles';

export interface PolIsVoteBoxTypes {
  className?: string;
  pageId: string;
  siteId: string;
}

const PolIsVoteBox: React.FC<PolIsVoteBoxTypes> = ({
  className,
  pageId,
  siteId,
}: PolIsVoteBoxTypes) => {
  const { isLoggedIn } = useContext(GlobalContext);
  const { redirect } = useRedirect();
  useEffect(() => {
    initializePolis();
  }, []);

  return (
    <StyledPolIsVoteBoxWrapper
      className={classNames(className, { shouldLogin: !isLoggedIn })}
    >
      <StyledPolIsVoteBox
        className={`polis`}
        data-page_id={pageId}
        data-site_id={`polis_site_id_${siteId}`}
      />
      {!isLoggedIn && (
        <StyledShadowOver>
          <StyledButton
            onClick={() =>
              redirect(
                ENDPOINTS.AUTH.SSO_REDIRECT({ service: 'google' }),
                window.location.pathname,
              )
            }
            icon={<GoogleOutlined />}
            size={'large'}
            type={'default'}
          >
            {MESSAGES.LOGIN_VIA_GOOGLE}
          </StyledButton>
        </StyledShadowOver>
      )}
    </StyledPolIsVoteBoxWrapper>
  );
};

export default PolIsVoteBox;
