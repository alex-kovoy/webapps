/*
Copyright 2020 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonWarning, ButtonSecondary, Text } from 'design';
import * as Alerts from 'design/Alert';
import { useAttempt } from 'shared/hooks';
import Dialog, { DialogContent, DialogFooter } from 'design/DialogConfirmation';

export default function DeleteConnectorDialog(props) {
  const { name, onClose, onDelete } = props;
  const [attempt, attempActions] = useAttempt();
  const isDisabled = attempt.isProcessing;

  function onOk() {
    attempActions.do(() => onDelete()).then(() => onClose());
  }

  return (
    <Dialog disableEscapeKeyDown={false} onClose={onClose} open={true}>
      <Box width="540px">
        {attempt.isFailed && <Alerts.Danger>{attempt.message}</Alerts.Danger>}
        <DialogContent>
          <Text typography="h3">Remove Connector?</Text>
          <Text typography="paragraph" mt="2" mb="6">
            Are you sure you want to delete connector{' '}
            <Text as="span" bold color="primary.contrastText">
              {name}
            </Text>
            ?
          </Text>
        </DialogContent>
        <DialogFooter>
          <ButtonWarning mr="3" disabled={isDisabled} onClick={onOk}>
            Yes, Remove Connector
          </ButtonWarning>
          <ButtonSecondary disabled={isDisabled} onClick={onClose}>
            Cancel
          </ButtonSecondary>
        </DialogFooter>
      </Box>
    </Dialog>
  );
}

DeleteConnectorDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
