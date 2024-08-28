import { Spinner, Table } from "react-bootstrap";
import { useFilesStore } from "../../../store/useFilesStore";
import { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { TableRow } from "../../components/Home/TableRow";
import { TableHead } from "../../components/Home/TableHead";

export const Home = () => {
  const files = useFilesStore((state) => state.files);
  const getFiles = useFilesStore((state) => state.getFiles);
  const filesLoading = useFilesStore((state) => state.filesLoading);
  useEffect(() => {
    getFiles();
  }, [getFiles]);

  return (
    <>
      <NavBar />
      <main>
        {filesLoading ? (
          <Spinner />
        ) : (
          files.length > 0 && (
            <Table striped bordered responsive>
              <TableHead />
              <tbody>
                {files.map((_file) => {
                  return _file.lines.map(({ text, number, hex }) => {
                    return (
                      <TableRow
                        key={text + hex}
                        file={_file.file}
                        text={text}
                        number={number}
                        hex={hex}
                      />
                    );
                  });
                })}
              </tbody>
            </Table>
          )
        )}
      </main>
    </>
  );
};
